import { ReactElement } from 'react';

export interface IPlanet {
  climate: string;
  // created: Date;
  diameter: string;
  // edited: Date;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  // surfaceWater: string;
  terrain: string;
  url: string;
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
