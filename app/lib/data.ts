"use server";

import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import { ParticipantSchema } from "./definitions";
import { ApiError } from "next/dist/server/api-utils";
import { METHODS } from "http";

const APIURL = "https://em-api.netlify.app/api/v1";

export type EventSchema = {
  id: string;
  organizer: string;
  name: string;
  desc: string;
  dateFrom: Date;
  dateTo: Date;
};

const EVENTS_PER_PAGE = 6;
export async function fetchEvents(
  query: string = "",
  page: number = 1,
  all: boolean = false
) {
  unstable_noStore();
  let api = `${APIURL}/events?query=${query}&limit=${EVENTS_PER_PAGE}&page=${page}`;
  if (all) {
    api = `${APIURL}/events?query=${query}`;
  }
  try {
    const res = await fetch(`${api}`).then((res) => res.json());
    const { count, events }: { count: number; events: EventSchema[] } = res;
    return { count, events };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch events.");
  }
}

export async function deleteEvent(eventId: string) {
  try {
    await fetch(APIURL + `/event/${eventId}`, { method: "delete" }).then(
      (res) => res.text()
    );
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/events");
}

export async function createEvent(formData: FormData) {
  const data = {
    name: formData.get("name"),
    organizer: formData.get("organizer"),
    desc: formData.get("desc"),
    dateFrom: formData.get("dateFrom"),
    dateTo: formData.get("dateTo"),
  };
  try {
    const createdEvent = await fetch(`${APIURL}/events/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
}

export async function fetchEventById(id: string) {
  unstable_noStore();
  try {
    const event = await fetch(`${APIURL}/events/${id}`).then((res) =>
      res.json()
    );

    return event;
  } catch (error) {
    console.error(error);
  }
}

export async function updateEvent(id: string, formData: FormData) {
  try {
    const data = {
      organizer: formData.get("organizer"),
      name: formData.get("name"),
      desc: formData.get("desc"),
      dateFrom: formData.get("dateFrom"),
      dateTo: formData.get("dateTo"),
    };
    console.log(JSON.stringify(data));
    await fetch(`${APIURL}/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
}

export async function fetchParticipants(eventId: string, query: string = "") {
  unstable_noStore();
  try {
    const res: { count: number; participants: ParticipantSchema[] } =
      await fetch(
        `${APIURL}/events/${eventId}/participants?query=${query}`
      ).then((res) => res.json());

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteParticipant(eventId: string, studentId: string) {
  try {
    await fetch(`${APIURL}/events/${eventId}/participants/${studentId}`, {
      method: "delete",
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/dashboard/event/${eventId}/details`);
}

export async function fetchEventPages(query: string) {
  unstable_noStore();
  try {
    const res = await fetch(`${APIURL}/events?query=${query}`).then((res) =>
      res.json()
    );
    const { count } = res;
    return { count };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch events.");
  }
}

export async function createParticipant(id: string, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      studentId: formData.get("studentId"),
      faculty: formData.get("faculty"),
    };

    const created = await fetch(`${APIURL}/events/${id}/participant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/dashboard/events/${id}/details`);
  redirect(`/dashboard/events/${id}/details`);
}

export async function fetchParticipantById(eventId: string, studentId: string) {
  unstable_noStore();
  try {
    const participant: ParticipantSchema = await fetch(
      `${APIURL}/events/${eventId}/participants/${studentId}`
    ).then((res) => res.json());
    return participant;
  } catch (error) {
    console.error(error);
  }
}

export async function updateParticipant(
  id: string,
  studentId: string,
  formData: FormData
) {
  try {
    const data = {
      name: formData.get("name"),
      studentId: formData.get("studentId"),
      faculty: formData.get("faculty"),
    };

    await fetch(`${APIURL}/events/${id}/participants/${studentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/dashboard/events/${id}/details`);
  redirect(`/dashboard/events/${id}/details`);
}
