"use client";

import { useSession } from "next-auth/react";
export default function Home() {

  const { data } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Nome do usuário: {data?.user?.name}</h2>
      <h3>Email do usuário: {data?.user?.email}</h3>
    </main>
  )
}
