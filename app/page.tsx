import { Button } from "./ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full">
      <div className="flex flex-col h-screen items-center justify-center gap-5">
        <div className="text-center">
          <h1 className="font-bold text-3xl">CHUYÊN TRANG QUẢN LÍ HOẠT ĐỘNG</h1>
          <span>(prototype page)</span>
        </div>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
