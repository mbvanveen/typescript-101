/*
 * ----------------------------------------------------------------------------------------------------
 * Exercise 1/5: Defining types for a functions argument(s)
 * Type the arguments of the function without using the any or unknown keywords.
 * Bonus points for those who can make the Object and Array types immutable.
 * ----------------------------------------------------------------------------------------------------
 */

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet('John Hammond'));

function multiplyAge(age, multiplier) {
    return `If you were ${multiplier} times as old as you are now (${age}), your age would be: ${age * multiplier}`;
}

console.log(multiplyAge(29, 5));

function getNovel(novelSentences) {
    return `${novelSentences.join(' ')}`;
}

console.log(getNovel(['Once upon a time in the West', 'there was a little TypeScript developer', 'called', 'you!']));

function constructHouse(builders) {
    return builders
        .map(builder => `Builder ${builder.name} has started building the house on day ${builder.startDay} of ${builder.month} in year ${builder.startYear}.`)
        .join(' ');
}

console.log(constructHouse([
    {
        name: 'Fernando Sucre',
        startDay: 5,
        month: 'July',
        startYear: 2005
    },
    {
        name: 'Michael Scofield',
        startDay: 8,
        month: 'June',
        startYear: 2015
    },
    {
        name: 'Bruce Springsteen',
        startDay: 2,
        month: 'December',
        startYear: 1993
    }
]));

function callPerson(firstName, lastName) {
    return `Now calling: ${firstName}${lastName ? ` ${lastName}` : ''}. Please stand by.`;
}

console.log(callPerson('Steve-o'));
console.log(callPerson('Peeta', 'Mellark'));