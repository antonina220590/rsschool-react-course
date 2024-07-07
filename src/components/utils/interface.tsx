import { ReactElement } from 'react';

export interface IPlanet {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface IProps {
  children: React.ReactNode;
  fallback?: ReactElement;
}

export interface IState {
  hasError: boolean;
}
