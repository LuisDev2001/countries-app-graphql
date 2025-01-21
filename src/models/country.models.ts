export interface CountryResponse {
  countries: Country[];
}

export interface Country {
  code:       string;
  name:       string;
  capital:    null | string;
  currency:   null | string;
  currencies:  string[];
  continent:  Continent;
  languages:  Continent[];
  __typename: CountryTypename;
}

export enum CountryTypename {
  Country = "Country",
}

export interface Continent {
  name:       string;
  __typename: ContinentTypename;
}

export enum ContinentTypename {
  Continent = "Continent",
  Language = "Language",
}
