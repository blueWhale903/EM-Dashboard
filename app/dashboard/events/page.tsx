import { fetchEventPages, fetchEvents } from "@/app/lib/data";
import EventTable from "@/app/ui/events/event-table";
import { CreateEvent } from "@/app/ui/events/buttons";
import Breadcrumbs from "@/app/ui/events/breadcrumbs";
import Search from "@/app/ui/events/search";
import { Suspense } from "react";
import Pagination from "@/app/ui/pagination";
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { count } = await fetchEventPages(query);
  const totalPages = Math.ceil(Number(count) / 6);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Hoạt động", href: "/dashboard/events", active: true },
        ]}
      />{" "}
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Tìm hoạt động..." />
        <CreateEvent />
      </div>
      <Suspense>
        <EventTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
