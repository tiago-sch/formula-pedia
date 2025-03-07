import { fetchSeason } from "@/service/season";

const SeasonRaces = async ({ year }: { year: string }) => {
  const season = await fetchSeason(year);

  if ("error" in season) {
    return <div>[ERROR]</div>
  }

  return (
    <ul className="pb-6 pt-2">
      {season.races?.map(race => (
        <li key={`race-${race.round}`}>
          Round #{race.round} - {race.raceName} ({race.date})
        </li>
      ))}
    </ul>
  )
}

export default SeasonRaces;