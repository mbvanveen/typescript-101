/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 1/5: Defining types for a functions argument(s)
 * Correctly type the arguments of the function without using the any or unknown keywords.
 * Bonus points for those who can make the Object and Array types immutable with TypeScript.
 * ----------------------------------------------------------------------------------------------------
 */

function _sayHi(name: string): void {
    console.log(`Hello ${name}`);
}

_sayHi('John Hammond');

function _multiplyAge(age: number, multiplier: number): void {
    console.log(`If you were ${multiplier} times as old as you are now, your age would be: ${age * multiplier}`);
}

_multiplyAge(29, 5);

function _printNovel(novelSentences: readonly string[]): void {
    console.log(`${novelSentences.join(' ')}`);
}

_printNovel(['Once upon a time in the West', 'there was a little TypeScript developer', 'called', 'you!']);

type BuilderType = {
    readonly name: string;
    readonly startDay: number;
    readonly startYear: number;
};

function _constructHouse(builders: readonly BuilderType[]): void {
    console.log(
        builders
            .map(builder => `Builder ${builder.name} has started building the house on day ${builder.startDay} in year ${builder.startYear}.`)
            .join(' ')
    );
}

_constructHouse([
    {
        name: 'Fernando Sucre',
        startDay: 5,
        startYear: 2005
    },
    {
        name: 'Michael Scofield',
        startDay: 8,
        startYear: 2053
    },
    {
        name: 'Bruce Springsteen',
        startDay: 2,
        startYear: 1993
    }
]);

function _callPerson(firstName: string, lastName?: string): void {
    console.log(`Now calling: ${firstName}${lastName ? lastName : ''}. Please stand by.`);
}

_callPerson('Steve-o');
_callPerson('Peeta', 'Mellark');