import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'


export const findPlanetNameByMoon = (data, moonName) => {
  return data.planets
    .filter((planet) => planet.moons && planet.moons.includes(moonName))[0].name;
}


// ======For Loop========
// export const findPlanetNameByMoon = (data, moonName) => {
//   for (let i = 0; i < data.planets.length; i++){
//     if (data.planets[i].moons && data.planets[i].moons.includes(moonName)) {
//       return data.planets[i].name;
//     }
//   }
// }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
