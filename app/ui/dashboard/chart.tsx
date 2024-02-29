"use client";

import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { EventSchema } from "@/app/lib/definitions";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function EventsChart({ events }: { events: EventSchema[] }) {
  const months = Array(12).fill(0);
  events.map((item) => {
    const d = new Date(item.dateFrom);
    const month = d.getMonth();
    months[month - 1] += 1;
  });

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Number Of Events",
        data: months,
        stepSize: 1,
        borderWidth: 2,
        backgroundColor: "#0092df",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: ["chart"],
      },
    },
    scale: {
      y: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="">
      <Bar data={data} options={options}></Bar>
    </div>
  );
}
