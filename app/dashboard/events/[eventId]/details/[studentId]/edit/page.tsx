import { fetchParticipantById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/events/breadcrumbs";
import Form from "@/app/ui/participants/edit-form";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { eventId: string; studentId: string };
}) {
  const eventId = params.eventId;
  const studentId = params.studentId;
  const participant = await fetchParticipantById(eventId, studentId);
  if (!participant) {
    notFound();
  }

  return (
    <main>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: "Events", href: "/dashboard/events" },
          {
            label: "Edit Event",
            href: `/dashboard/event/${id}/edit`,
            active: true,
          },
        ]}
      /> */}
      <Form participant={participant} />
    </main>
  );
}
