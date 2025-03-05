import Link from "next/link";
import { fetchSeasons } from "@/service/season";

export default async function Seasons() {
  const seasons = await fetchSeasons();

  return (
    <div>
      SEASONS
      <ul>
        {seasons.seasons.map(season => (
          <li key={`season-${season.season}`}>
            <Link href={`/seasons/${season.season}`}>{season.season}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};