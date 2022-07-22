/*
 * ----------------------------------------------------------------------------------------------------
 * Exercise 2/5: Function return types
 * Correctly type the return type of the functions without using the any or unknown keywords.
 * ----------------------------------------------------------------------------------------------------
 */

function _sayHello(name: string): void {
    console.log(`Hello ${name}`);
}

_sayHello('John Hammond');


const _explorer = {
    name: 'John Hammond',
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

function _getAge(): number {
    return _explorer.age;
}

function _getName(): string {
    return _explorer.name;
}

function _getChildren(): string[] {
    return _explorer.children;
}

type _AddressType = {
    houseNumber: number;
    street: string;
    zipCode: string;
};

function _getAddress(): _AddressType {
    return _explorer.address;
}

/*
 * Write a function that (optionally) takes a name and returns either:
 * "There's some cookies left for {name}, but please leave some for me." - If there is a name
 * "There's some cookies left for you, but please leave some for me." - If there's no name
 */

function _replyOnCanIHaveACookie(name?: string): string {
    return `There's some cookies left for ${name || 'you'}, but please leave some for me.`;
}