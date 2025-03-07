import { Suspense } from "react";
import Loader from "@/components/Loader";
import SeasonDrivers from "@/components/Season/Drivers";
import SeasonConstructors from "@/components/Season/Constructors"
import SeasonRaces from "@/components/Season/Races";

export const revalidate = 86400;

export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    { year: "2024" },
    { year: "2025" },
  ]
}

export default async function SeasonDetails({
  params
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params;

  return <div>
    <h1>Season of {year}</h1>
    <div className="flex gap-6">
      <div className="w-[50%]">
        <div className="tabs tabs-border">
          <input
            type="radio"
            name="drivers_tabs"
            className="tab"
            aria-label="Drivers"
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Suspense fallback={<Loader />}>
              <SeasonDrivers year={year} />
            </Suspense>
          </div>

          <input
            type="radio"
            name="drivers_tabs"
            className="tab"
            aria-label="Constructors"
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
          <Suspense fallback={<Loader />}>
            <SeasonConstructors year={year} />
          </Suspense>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <h2 className="serif font-bold">Races</h2>
        <Suspense fallback={<Loader />}>
          <SeasonRaces year={year} />
        </Suspense>
      </div>
    </div>
  </div>
}