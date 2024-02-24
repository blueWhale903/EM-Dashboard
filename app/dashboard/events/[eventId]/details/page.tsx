import { fetchEventById, fetchParticipants } from "@/app/lib/data";
import {
  DeleteParticipant,
  CreateParticipant,
  UpdateParticipant,
} from "@/app/ui/participants/buttons";
import Search from "@/app/ui/events/search";
import { UserIcon } from "@heroicons/react/24/outline";

export default async function Page({
  params,
  searchParams,
}: {
  params: { eventId: string };
  searchParams?: { query?: string };
}) {
  const eventId = params.eventId;
  const query = searchParams?.query || "";
  const event = await fetchEventById(eventId);
  const res = await fetchParticipants(eventId, query);
  const participants = res?.participants;
  const count = res?.count;
  return (
    <div>
      <div className="mb-5 w-full p-4 bg-[#0092df] text-white rounded-lg">
        <h1 className="text-3xl mb-2 font-extrabold">{event.name}</h1>
        <table className="w-full min-w-full text-left">
          <tbody>
            <tr>
              <th className="w-[50%] md:w-[40%]">Đơn vị tổ chức</th>
              <td>{event.organizer}</td>
            </tr>
            <tr>
              <th>Mô tả</th>
              <td>{event.desc}</td>
            </tr>
            <tr>
              <th>Ngày tổ chức</th>
              <td>{new Date(event.dateFrom).toDateString()}</td>
            </tr>
            <tr>
              <th>Ngày kết thúc</th>
              <td>{new Date(event.dateTo).toDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-2 flex-col justify-between md:flex-row p-1 rounded-lg mb-2">
        <h2 className="text-2xl font-extrabold">DANH SÁCH NGƯỜI THAM GIA</h2>
        <div className="flex gap-3">
          <div className="flex w-fit justify-between">
            <UserIcon className="w-3" />
            <p className="leading-loose"> {count}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Search placeholder="Nhập tên hoặc MSSV" />
        <CreateParticipant id={event.id} />
      </div>
      <div className="mt-6">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0 overflow-scroll h-[380px] relative">
          <table className="w-full overflow-hidden">
            <thead>
              <tr className="text-left">
                <th className="py-3 px-2">Tên</th>
                <th className="py-3 px-2">MSSV</th>
                <th className="py-3 px-2">Khoa</th>
                <th className="py-3 px-2"></th>
              </tr>
            </thead>
            <tbody className="text-left ">
              {participants?.map((participant: any) => (
                <tr
                  key={participant.studentId}
                  className="bg-white rounded-md py-3w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="py-3 px-2 whitespace-nowrap">
                    <div>{participant.name}</div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    {participant.studentId}
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    {participant.faculty}
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <div className="flex gap-2 justify-end">
                      <UpdateParticipant
                        eventId={participant.eventId}
                        studentId={participant.studentId}
                      />
                      <DeleteParticipant
                        eventId={participant.eventId}
                        studentId={participant.studentId}
                      />
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
