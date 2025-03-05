import { fetchSeason } from "@/service/season";

export default async function SeasonDetails({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params;
  const response = await fetchSeason(year);

  if (response.error) {
    return <div>Not Found!</div>
  }

  return <div>
    <h1>Season of {year}</h1>
    <div className="flex gap-6">
      <div className="w-[50%]">
        <h2 className="serif font-bold">Drivers</h2>
        <ul className="pb-6 pt-2">
          {response.drivers?.map(driver => (
            <li key={`drive-${driver.code}`}>
              {driver.code || driver.driverId} - {driver.givenName} {driver.familyName} ({driver.nationality})
            </li>
          ))}
        </ul>

        <h2 className="serif font-bold">Constructors</h2>
        <ul className="pb-6 pt-2">
          {response.constructors?.map(maker => (
            <li key={`constructor-${maker.constructorId}`}>
              {maker.name} ({maker.nationality})
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[50%]">
        <h2 className="serif font-bold">Races</h2>
        <ul className="pb-6 pt-2">
          {response.races?.map(race => (
            <li key={`race-${race.round}`}>
              Round #{race.round} - {race.raceName} ({race.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
}