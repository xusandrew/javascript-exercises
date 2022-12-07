const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldAge > currAge ? oldest : current;
    });
};  

const getAge = function(birth, death){
    if (!death) death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
