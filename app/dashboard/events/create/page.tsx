import Form from "@/app/ui/events/create-form";
import Breadcrumbs from "@/app/ui/events/breadcrumbs";
import { fetchEvents } from "@/app/lib/data";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Hoạt động", href: "/dashboard/events" },
          {
            label: "Tạo mới",
            href: "/dashboard/events/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
