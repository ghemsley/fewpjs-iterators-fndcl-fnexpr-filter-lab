// Code your solution here
const findMatching = (drivers, string) =>
  drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (drivers, string) =>
  drivers.filter(
    (driver) =>
      driver.slice(0, string.length).toLowerCase() === string.toLowerCase()
  );

const matchName = (drivers, string) =>
  drivers.filter(
    (driver) => driver.name.toLowerCase() === string.toLowerCase()
  )
