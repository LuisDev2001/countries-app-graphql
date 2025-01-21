// Get Countries Response
export interface GetCountriesResponse {
  countries: Country[];
}

export interface Country {
  code: string;
  name: string;
  capital?: string | null;
  currency?: string | null;
  currencies?: string[];
  continent: Continent;
  languages: Language[];
}

// Get Country Response
export interface GetCountryResponse {
  country: CountryDetail;
}

export interface CountryDetail {
  code: string;
  name: string;
  capital?: string | null;
  currency?: string | null;
  continent: Continent;
  languages: Language[];
}

export interface Continent {
  name: string;
}

export interface Language {
  name: string;
  native: string;
}