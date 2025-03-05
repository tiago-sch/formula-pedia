import { fetchErgast } from "./ergastApi";
import { SeasonConstructors, SeasonDetails, SeasonDrivers, SeasonsResponse } from "./types";

export const fetchSeasons = async () => {
  const response = await fetchErgast<SeasonsResponse>("/seasons");

  return {
    seasons: response.SeasonTable.Seasons,
    offset: response.offset,
    limit: response.limit,
    total: response.total,
  };
};

export const fetchSeason = async (year: string) => {
  try {
    const [
      seasonRaces,
      seasonDrivers,
      seasonConstructors
    ] = await Promise.all([
      fetchErgast<SeasonDetails>(`/${year}`),
      fetchErgast<SeasonDrivers>(`/${year}/drivers`),
      fetchErgast<SeasonConstructors>(`/${year}/constructors`),
    ]);

    return {
      races: seasonRaces.RaceTable.Races,
      drivers: seasonDrivers.DriverTable.Drivers,
      constructors: seasonConstructors.ConstructorTable.Constructors,
    };
  } catch (error) {
    return { error };
  }
};