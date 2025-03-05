import type {
  Circuit,
  Constructor,
  ConstructorStanding,
  Driver,
  DriverStanding,
  MRDataBase,
  RaceTime,
  Season
} from "./generic";

export type SeasonsResponse = MRDataBase<{
  SeasonTable: {
    Seasons: Season[],          
  }
}>;

export type SeasonDetails = MRDataBase<{
  RaceTable: {
    season: string;
    Races: {
      season: string;
      round: string;
      raceName: string;
      Circuit: Circuit;
      date: string;
      time: string;
      FirstPractice: RaceTime;
      SecondPractice?: RaceTime;
      ThirdPractice?: RaceTime;
      Qualifying: RaceTime;
      Sprint?: RaceTime;
      SprintQualifying?: RaceTime;
    }[]
  }
}>

export type SeasonDrivers = MRDataBase<{
  DriverTable: {
    season: string;
    Drivers: Driver[],
  }
}>;

export type SeasonConstructors = MRDataBase<{
  season: string;
  ConstructorTable: {
    season: string;
    Constructors: Constructor[];
  };
}>

export type SeasonConstructorsStanding = MRDataBase<{
  StandingsTable: {
    season: string;
    round: string | null;
    StandingsLists: {
      season: string;
      round: string;
      ConstructorStandings: ConstructorStanding[];
    }[]
  }
}>;

export type SeasonDriverStanding = MRDataBase<{
  StandingsTable: {
    season: string;
    round: string | null;
    StandingsLists: {
      season: string;
      round: string | null;
      DriverStandings: DriverStanding[];
    }[]
  }
}>;
