const getAge = function(person) {

    if(!person.hasOwnProperty('yearOfDeath'))
        return new Date().getFullYear() - person.yearOfBirth
    else
        return person.yearOfDeath - person.yearOfBirth

};


const findTheOldest = function(people) {

return people.reduce( (oldest, curr) => getAge(curr) > getAge(oldest) ? curr : oldest)

};

// Do not edit below this line
module.exports = findTheOldest;
