import { deleteParticipant } from "@/app/lib/data";
import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdateParticipant({
  eventId,
  studentId,
}: {
  eventId: string;
  studentId: string;
}) {
  return (
    <Link
      href={`/dashboard/events/${eventId}/details/${studentId}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteParticipant({
  eventId,
  studentId,
}: {
  eventId: string;
  studentId: string;
}) {
  const deleteParticipantWithId = deleteParticipant.bind(
    null,
    eventId,
    studentId
  );

  return (
    <form action={deleteParticipantWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function CreateParticipant({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/events/${id}/details/create-participant`}
      className="flex h-10 items-center rounded-lg bg-[#0092df] px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Thêm</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
