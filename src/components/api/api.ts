class SWApi {
  async getData(url: string) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Impossible to fetch data');
    }
    return res.json();
  }

  async getAllPlanet() {
    const res = await this.getData('https://swapi.dev/api/planets/');
    return res.results;
  }

  getPlanet(id: number) {
    return this.getData(`https://swapi.dev/api/planets/${id}/`);
  }
}

export default SWApi;
