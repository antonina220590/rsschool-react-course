// const BASE_URL = 'https://swapi.dev/api/';

// export async function getData(url: string) {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error('Impossible to fetch data');
//   }
//   return res.json();
// }

// export async function getSearch(name: string, page: number = 1) {
//   try {
//     const res = await getData(
//       `${BASE_URL}/planets?search=${name}&page=${page}`
//     );
//     return res.results;
//   } catch {
//     throw new Error('Impossible to fetch data');
//   }
// }
