/*
 * ----------------------------------------------------------------------------------------------------
 * Exercise 2/5: Function return types
 * Type the return type of the functions without using the any or unknown keywords.
 * ----------------------------------------------------------------------------------------------------
 */

function sayHello(name: string): void {
    console.log(`Hello ${name}`);
}

sayHello('John Hammond');

const person = {
    name: 'John',
    age: 67,
    children: [
        'Dirk',
        'Dries'
    ],
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

function getAge(): number {
    return person.age;
}

function getName(): string {
    return person.name;
}

function getChildren(): string[] {
    return person.children;
}

type AddressType = {
    houseNumber: number;
    street: string;
    zipCode: string;
};

function getAddress(): AddressType {
    return person.address;
}

function getAgeAsync(): Promise<number> {
    return Promise.resolve(getAge());
}

console.log(getName());
console.log(getChildren());
console.log(getAddress());
(async () => {
    const age = await getAgeAsync();
    console.log(age);
})();

/*
 * Write a function that (optionally) takes a name and returns either:
 * "There's some cookies left for {name}, but please leave some for me." - If there is a name
 * "There's some cookies left for you, but please leave some for me." - If there's no name
 */

function replyOnCanIHaveACookie(name?: string): string {
    return `There's some cookies left for ${name || 'you'}, but please leave some for me.`;
}

console.log(replyOnCanIHaveACookie());
console.log(replyOnCanIHaveACookie('Hank'));

// Bonusss for those that are blazing fast

type IHaveNoIdeaType = Record<string, unknown>;

async function getDitto(): Promise<IHaveNoIdeaType> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', { method: 'GET' });
    
    return response.json();
}

(async () => {
    const ditto = await getDitto();
    console.log(ditto);
})();