/*
Given an age in seconds, calculate how old someone would be on:

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
*/

const age = (planet, age) => {
  const earthSeconds = 31557600
  const orbitalPeriods = {
    mercury: Math.round(earthSeconds * 0.2408467),
    venus: Math.round(earthSeconds * 0.61519726),
    earth: Math.round(earthSeconds),
    mars: Math.round(earthSeconds * 1.8808158),
    jupiter: Math.round(earthSeconds * 11.862615),
    saturn: Math.round(earthSeconds * 29.447498),
    uranus: Math.round(earthSeconds * 84.016846),
    neptune: Math.round(earthSeconds * 164.79132)
  }

  return +(age / orbitalPeriods[planet]).toFixed(2)
}
