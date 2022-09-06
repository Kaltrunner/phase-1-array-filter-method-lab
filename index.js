// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    return drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase() }) 
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver) {return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
}

const driversName = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversName, string) {
    return driversName.filter(function (driver) {return driver.name === string})
}