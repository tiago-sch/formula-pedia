import { fetchErgast } from "./ergastApi";
import { SeasonConstructors, SeasonDetails, SeasonDrivers, SeasonsResponse } from "./types";

export const fetchSeasons = async () => {
  const response = await fetchErgast<SeasonsResponse>(
    "/seasons",
    { limit: "100" }
  );

  return {
    seasons: response.SeasonTable.Seasons,
    offset: response.offset,
    limit: response.limit,
    total: response.total,
  };
};

export const fetchSeason = async (year: string) => {
  try {
    const seasonRaces = await fetchErgast<SeasonDetails>(`/${year}`);

    return {
      races: seasonRaces.RaceTable.Races,
    };
  } catch (error) {
    return { error };
  }
};

export const fetchSeasonDrivers = async (year: string) => {
  try {
    const seasonDrivers = await fetchErgast<SeasonDrivers>(`/${year}/drivers`);

    return seasonDrivers.DriverTable.Drivers
  } catch (error) {
    return { error };
  }
}

export const fetchSeasonConstructors = async (year: string) => {
  try {
    const seasonConstructors = await fetchErgast<SeasonConstructors>(`/${year}/constructors`);

    return seasonConstructors.ConstructorTable.Constructors
  } catch (error) {
    return { error };
  }
}