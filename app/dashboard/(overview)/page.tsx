import EventsChart from "@/app/ui/dashboard/chart";
import { fetchEvents, fetchEventPages } from "@/app/lib/data";
import { getEventCountByMonth } from "@/app/lib/utils";
export default async function Page() {
  const { events } = await fetchEvents(undefined, undefined, true);
  return (
    <div>
      <EventsChart events={events} />
    </div>
  );
}
