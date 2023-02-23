import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42


export function allPlanetsMoonsCount(data) {
  let totalMoons = 0;
  data.planets.forEach(planet => totalMoons += (planet.moonsCount || 0));
  return totalMoons;
}


//================== for loop version ========================
// export function allPlanetsMoonsCount(data) {
//     let totalMoons = 0;
//     for (let i = 0; i < data.planets.length; i++) {
//       if (data.planets[i].moonsCount) {
//         totalMoons += data.planets[i].moonsCount;
//       }
//     }
//     return totalMoons;
//   }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
