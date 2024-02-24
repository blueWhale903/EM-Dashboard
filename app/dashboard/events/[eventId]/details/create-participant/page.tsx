import Form from "@/app/ui/participants/create-form";
import Breadcrumbs from "@/app/ui/events/breadcrumbs";
import { fetchEvents } from "@/app/lib/data";

export default function Page() {
  return (
    <main>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: "Events", href: "/dashboard/events" },
          {
            label: "Create Event",
            href: "/dashboard/events/create",
            active: true,
          },
        ]}
      /> */}
      <Form />
    </main>
  );
}
