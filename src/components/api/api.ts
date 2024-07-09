const BASE_URL = 'https://swapi.dev/api/';

class SWApi {
  async getData(url: string) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Impossible to fetch data');
    }
    return res.json();
  }

  async getAllPlanet() {
    try {
      const res = await this.getData(`${BASE_URL}/planets/`);
      return res.results;
    } catch {
      throw new Error('Impossible to fetch data');
    }
  }

  getPlanet(id: number) {
    return this.getData(`${BASE_URL}/planets/${id}/`);
  }

  async getSearch(name: string) {
    try {
      const res = await this.getData(`${BASE_URL}/planets/?search=${name}`);
      return res.results;
    } catch {
      throw new Error('Impossible to fetch data');
    }
  }
}

export default SWApi;
