"use client";

import { EventSchema, ParticipantSchema } from "@/app/lib/definitions";
import {
  UserCircleIcon,
  CalendarIcon,
  DocumentTextIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { updateParticipant } from "@/app/lib/data";
import { faculty } from "@/app/lib/definitions";

export default function EditParticipant({
  participant,
}: {
  participant: ParticipantSchema;
}) {
  const updateParticipantWithId = updateParticipant.bind(
    null,
    participant.eventId,
    participant.studentId
  );

  return (
    <form action={updateParticipantWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Họ và tên
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Họ tên"
                defaultValue={participant.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <InboxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="mb-2 block text-sm font-medium">
            MSSV
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="studentId"
                name="studentId"
                type="text"
                placeholder="Mã số sinh viên"
                defaultValue={participant.studentId}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="mb-2 block text-sm font-medium">
            Khoa
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              {/* <input
                id="faculty"
                name="faculty"
                type="text"
                placeholder="Tên khoa"
                defaultValue={participant.faculty}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              /> */}
              <select
                id="faculty"
                name="faculty"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Chọn khoa
                </option>
                {faculty.map((faculty, index) => (
                  <option key={index} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/dashboard/events/${participant.eventId}/details`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Quay lại
        </Link>
        <Button type="submit">Thay đổi</Button>
      </div>
    </form>
  );
}
