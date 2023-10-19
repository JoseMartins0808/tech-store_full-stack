"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";


export default function Home() {

  const { data } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/banner-home-01.png" alt="Until 55% off sale just this month" height={0} width={0}
        className="h-auto w-full" sizes="100vw" />
    </main>
  )
}
