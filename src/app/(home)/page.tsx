import Image from "next/image";
import { CategoriesOverview } from "./components/categories-overview";


export default function Home() {

  return (
    <main className="p-5">
      <Image src="/banner-home-01.png" alt="Until 55% off sale just this month" height={0} width={0}
        className="h-auto w-full" sizes="100vw" />
      <div className="mt-8">
        <CategoriesOverview />
      </div>
    </main>
  )
}
