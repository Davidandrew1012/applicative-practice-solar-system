import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const discoveryYears = data.asteroids.map(asteroid => asteroid.discoveryYear);
  const discoveryYearCounts = discoveryYears.reduce((acc, year) => {
    if (acc[year]) {
      acc[year]++;
    } else {
      acc[year] = 1;
    }
    return acc;
  }, {});
  let greatestDiscoveryYear;
  let highestCount = 0;
  Object.keys(discoveryYearCounts).forEach(year => {
    if (discoveryYearCounts[year] > highestCount) {
      highestCount = discoveryYearCounts[year];
      greatestDiscoveryYear = Number(year);
    }
  });
  return greatestDiscoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

