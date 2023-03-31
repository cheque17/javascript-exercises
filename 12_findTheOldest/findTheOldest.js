const findTheOldest = function(array) {
    return array.reduce( (firstPerson, secondPerson) => {
        let firstPersonAge= calculateAge (firstPerson.yearOfBirth, firstPerson.yearOfDeath);
        let secondPersonAge = calculateAge( secondPerson.yearOfBirth, secondPerson.yearOfDeath);
        return firstPersonAge < secondPersonAge ? secondPerson :firstPerson;
    } )
}; 

const calculateAge = function (birthYear, lastYearReportedAlive) {
    if (!lastYearReportedAlive) {
      lastYearReportedAlive = new Date().getFullYear();
    }
    return lastYearReportedAlive - birthYear;
  };

// Do not edit below this line
module.exports = findTheOldest;
