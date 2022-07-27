/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 3/5: Union Types & casting
 * Type the argument type (Record<string, unknown>) of the function without using the any or unknown keywords.
 * You probably will have to correct the logic in isAnimal to make TypeScript understand what you are trying to do.
 * 
 * FYI: Use type casting very wisely, since you are overruling TypeScript.
 * ----------------------------------------------------------------------------------------------------
 */

type AddressType = {
    houseNumber: number;
    street: string;
    zipCode: string;
}

type AnimalType = {
    name: string;
    age: number;
    children: string[];
    address: AddressType;
};

type PersonType = {
    name: string;
    age: number;
    children: string[];
    occupation: string;
    address: AddressType;
};

const person = {
    name: 'John',
    age: 67,
    children: [
        'Dirk',
        'Dries'
    ],
    occupation: 'Work',
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

const animal = {
    name: 'Felix',
    age: 10,
    children: [
        'Minoe',
        'Pluisje'
    ],
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

function isAnimal(animalOrPerson: AnimalType | PersonType): boolean {
    return !Boolean((animalOrPerson as PersonType).occupation);
}

console.log(isAnimal(person)); // Should be false
console.log(isAnimal(animal)); // Should be true