import { fetchEventPages, fetchEvents } from "@/app/lib/data";
import { DeleteEvent, EventDetails, UpdateEvent } from "./buttons";
import Link from "next/link";
export default async function EventTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { events } = await fetchEvents(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {events?.map((event) => (
              <div
                key={event.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{event.organizer}</p>
                    </div>
                    <p className="text-sm text-gray-500">{event.name}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{event.desc}</p>
                    <p>{new Date(event.dateFrom).toDateString()}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <EventDetails id={event.id} />
                    <UpdateEvent eventId={event.id} />
                    <DeleteEvent id={event.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-2 py-5 font-medium sm:pl-6">
                  Đơn vị
                </th>
                <th scope="col" className="px-1 py-5 font-medium">
                  Tên
                </th>
                <th scope="col" className="px-1 py-5 font-medium">
                  Mô tả
                </th>
                <th scope="col" className="px-1 py-5 font-medium">
                  Ngày tổ chức
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {events?.map((event) => (
                <tr
                  key={event.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-1 py-3 pl-6 pr-3">
                    <p>{event.organizer}</p>
                  </td>
                  <td className="whitespace-nowrap px-1 py-3">{event.name}</td>
                  <td className="whitespace-nowrap px-1 py-3">
                    {event.desc.slice(0, 42).concat("...")}
                  </td>
                  <td className="whitespace-nowrap px-1 py-3">
                    {new Date(event.dateFrom).toDateString()}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <EventDetails id={event.id} />
                      <UpdateEvent eventId={event.id} />
                      <DeleteEvent id={event.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
