import { Suspense } from "react";
import { fetchSeason } from "@/service/season";
import Loading from "@/components/Loader";
import SeasonDrivers from "@/components/Season/Drivers";
import SeasonConstructors from "@/components/Season/Constructors";

export default async function SeasonDetails({
  params
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params;
  const season = await fetchSeason(year);

  if (season.error) {
    return <div>Season not Found!</div>
  }

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
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Suspense fallback={Loading()}>
              <SeasonDrivers year={year} />
            </Suspense>
          </div>

          <input
            type="radio"
            name="drivers_tabs"
            className="tab"
            aria-label="Constructors"
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Suspense fallback={Loading()}>
              <SeasonConstructors year={year} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <h2 className="serif font-bold">Races</h2>
        <ul className="pb-6 pt-2">
          {season.races?.map(race => (
            <li key={`race-${race.round}`}>
              Round #{race.round} - {race.raceName} ({race.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
}