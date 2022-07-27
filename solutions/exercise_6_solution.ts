/*
 * ---------------------------------------------------------------------------------------------------- 
 * Bonus exercise 6/5: Make sure the code works correctly with the use of type predicates.
 * ----------------------------------------------------------------------------------------------------  
*/

const person = {
    name: 'John',
    age: 67,
    children: [
        'Dirk',
        'Dries'
    ],
    occupation: 'making food review videos',
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
    ability: 'catch mice',
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

type AddressType = {
    houseNumber: number;
    street: string;
    zipCode: string;
}

type AnimalType = {
    name: string;
    age: number;
    ability: string;
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

function isPerson(animalOrPerson: AnimalType | PersonType): animalOrPerson is PersonType {
    return Boolean((animalOrPerson as PersonType).occupation);
}

function isAnimal(animalOrPerson: AnimalType | PersonType): animalOrPerson is AnimalType {
    return Boolean((animalOrPerson as AnimalType).ability);
}

function petOrFire(animalOrPerson: AnimalType | PersonType): void {
    if (isPerson(animalOrPerson)) {
        console.log(`Person ${animalOrPerson.name} with occupation "${animalOrPerson.occupation.toLowerCase()}" has been fired.`)
    } else if (isAnimal(animalOrPerson)) {
        if (isAnimal(animalOrPerson)) {
            console.log(`Animal ${animalOrPerson.name} has been pet and will now ${animalOrPerson.ability}.`)
        }
    }
}

petOrFire(person); // John should be fired.
petOrFire(animal); // We don't fire animals, we pet them!