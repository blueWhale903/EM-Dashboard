import { fetchEventById } from "@/app/lib/data";
import { EventSchema } from "@/app/lib/definitions";
import Breadcrumbs from "@/app/ui/events/breadcrumbs";
import Form from "@/app/ui/events/edit-form";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { eventId: string };
}) {
  const id = params.eventId;
  const event = await fetchEventById(id);
  if (!event) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Hoạt động", href: "/dashboard/events" },
          {
            label: "Chỉnh sửa",
            href: `/dashboard/event/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form event={event} />
    </main>
  );
}
