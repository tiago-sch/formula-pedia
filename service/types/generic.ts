export type RaceTime = {
  date: string;
  time: string;
}

export type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long:string;
    locality: string;
    country: string;
  };
};

export type Constructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
};

export type Driver = {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

export type Season = {
  season: string;
  url: string;
};

export type ConstructorStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
};

export type DriverStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor;
};

export type MRDataBase<T> = {
  offset: number;
  limit: number;
  total: number,
  xmlns: string;
  series: "f1";
  url: string;
} & T;