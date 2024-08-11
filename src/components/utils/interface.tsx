import { ReactElement } from 'react';

export interface IPlanet {
  climate?: string;
  diameter?: string;
  gravity?: string;
  name?: string;
  orbital_period?: string;
  population?: string;
  rotation_period?: string;
  terrain?: string;
  url?: string;
}

export interface IResponseResult {
  results: IPlanet[];
  name: string;
  url: string;
  isFetching?: boolean;

  id?: string;
}

export interface Info {
  page: number;
  search?: string;
}

export interface IPlanetMain {
  name: string;
  url: string;
}

export interface IProps {
  children: React.ReactNode;
  fallback?: ReactElement;
  searchValue?: string;
}

export interface IState {
  hasError: boolean;
}

export type PlanetProp = {
  planet: IPlanet;
};
