export type EventSchema = {
  id: string;
  organizer: string;
  name: string;
  desc: string;
  dateFrom: Date;
  dateTo: Date;
};

export type ParticipantSchema = {
  name: string;
  studentId: string;
  faculty: string;
  eventId: string;
};

export const organizers = [
  "LCH TTH",
  "LCH HH",
  "LCH VL",
  "LCH KHCNVL",
  "LCH CNTT",
  "LCH MT",
  "LCH DTVT",
  "LCH SHCNSH",
  "LCH DC",
];

export const faculty = [
  "Toán - Tin học",
  "Vật lý - Vật lý Kỹ thuật",
  "Hóa học",
  "Sinh học - Công nghệ Sinh học",
  "Công nghệ Thông tin",
  "Điện tử viễn thông",
  "Môi trường",
  "Khoa học & Công nghệ Vật liệu",
  "Địa chất",
  "Trường ngoài",
  "Khác",
];
