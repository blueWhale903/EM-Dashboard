import { deleteEvent } from "@/app/lib/data";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateEvent({ eventId }: { eventId: string }) {
  return (
    <Link
      href={`/dashboard/events/${eventId}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteEvent({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteEvent.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function EventDetails({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/events/${id}/details`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Bars3BottomLeftIcon className="w-5" />
    </Link>
  );
}

export function CreateEvent() {
  return (
    <Link
      href="/dashboard/events/create"
      className="flex h-10 items-center rounded-lg bg-[#0092df] px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Thêm</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
