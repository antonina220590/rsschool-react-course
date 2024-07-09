const BASE_URL = 'https://swapi.dev/api/';

export async function getData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Impossible to fetch data');
  }
  return res.json();
}

export async function getAllPlanet() {
  try {
    const res = await getData(`${BASE_URL}/planets/`);
    return res.results;
  } catch {
    throw new Error('Impossible to fetch data');
  }
}

export async function getPlanet(id: number) {
  return getData(`${BASE_URL}/planets/${id}/`);
}

export async function getSearch(name: string) {
  try {
    const res = await getData(`${BASE_URL}/planets/?search=${name}`);
    return res.results;
  } catch {
    throw new Error('Impossible to fetch data');
  }
}
