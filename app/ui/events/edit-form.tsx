"use client";

import { EventSchema } from "@/app/lib/definitions";
import {
  UserCircleIcon,
  CalendarIcon,
  DocumentTextIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { updateEvent } from "@/app/lib/data";
import { organizers } from "@/app/lib/definitions";

export default function EditEventForm({ event }: { event: EventSchema }) {
  const updateEventWithId = updateEvent.bind(null, event.id);

  return (
    <form action={updateEventWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="organizer" className="mb-2 block text-sm font-medium">
            Chọn Đơn Vị
          </label>
          <div className="relative">
            <select
              id="organizer"
              name="organizer"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={event.organizer}
              required
            >
              <option value="" disabled>
                Chọn đơn vị
              </option>
              {organizers.map((organizer, index) => (
                <option key={index} value={organizer}>
                  {organizer}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Tên Hoạt Động
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nhập tên hoạt động"
                defaultValue={event.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <InboxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="mb-2 block text-sm font-medium">
            Mô Tả
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="desc"
                name="desc"
                type="text"
                placeholder="Nhập mô tả"
                defaultValue={event.desc}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="flex w-[50%] gap-10">
          <div className="mb-4">
            <label
              htmlFor="dateFrom"
              className="mb-2 block text-sm font-medium"
            >
              Ngày Tổ Chức
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="dateFrom"
                  name="dateFrom"
                  type="date"
                  defaultValue={event.dateFrom.toString().slice(0, 10)}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="dateTo" className="mb-2 block text-sm font-medium">
              Ngày Kết Thúc
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="dateTo"
                  name="dateTo"
                  type="date"
                  defaultValue={event.dateTo.toString().slice(0, 10)}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/events"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Quay lại
        </Link>
        <Button type="submit">Sửa</Button>
      </div>
    </form>
  );
}
