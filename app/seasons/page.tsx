import Link from "next/link";
import { fetchSeasons } from "@/service/season";
import { Fragment } from "react";

export default async function Seasons() {
  const seasons = await fetchSeasons();

  const groups = Object.groupBy(seasons.seasons, (obj) => {
    return obj.season.substring(0, 3);
  });

  return (
    <div>
      <h2 className="font-bold text-xl py-3">SEASONS</h2>
      <div className="tabs tabs-lift">
        {Object.entries(groups).reverse().map(([key, list], index) => (
          <Fragment key={`decade-${key}`}>
            <input type="radio" name="decades_tabs" className="tab" aria-label={`${key}X`} defaultChecked={index === 0} />

            <div className="tab-content bg-base-100 border-base-300 p-6">
              <ul className="flex flex-wrap justify-start gap-3">
                {list?.reverse().map(season => (
                  <li key={`season-${season.season}`}>
                    <Link
                      className="btn btn-primary w-20"
                      href={`/seasons/${season.season}`}
                      prefetch={false}
                    >{season.season}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
};