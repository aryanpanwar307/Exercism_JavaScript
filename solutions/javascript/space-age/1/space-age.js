//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const SECONDS_PER_EARTH_YEAR = 31557600 
const PLANET_AGE = {
Mercury:	0.2408467,
Venus:	0.61519726,
Earth:	1.0,
Mars:	1.8808158,
Jupiter:	11.862615,
Saturn:	29.447498,
Uranus:	84.016846,
Neptune:	164.79132
}
function round2(n) {
  return Math.round(n * 100) / 100;
}
const earthYearInSec = 31557600;
export const age = (planet,seconds) => {
  console.log("pl"+ planet)
  planet = planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();
  console.log("pl"+ planet)

  if(!PLANET_AGE[planet]) throw new Error("not a planet")
  const earthYears = seconds / SECONDS_PER_EARTH_YEAR;
  const planetYears = earthYears / PLANET_AGE[planet];
  return round2(planetYears);
};
