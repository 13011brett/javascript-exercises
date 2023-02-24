const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.sort(function(a, b){
        if(b.yearOfDeath == undefined) b.yearOfDeath = currentYear;
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return nextGuy - lastGuy;
        // return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest.find(x => x.name);
};

// Do not edit below this line
module.exports = findTheOldest;
