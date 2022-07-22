/*
 * ---------------------------------------------------------------------------------------------------- 
 * Bonus exercise 6/5: Make sure the code works correctly with the use of type predicates.
 * ----------------------------------------------------------------------------------------------------  
*/

const _person2 = {
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

const _animal2 = {
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

type _AddressType3 = {
    houseNumber: number;
    street: string;
    zipCode: string;
}

type _AnimalType2 = {
    name: string;
    age: number;
    ability: string;
    children: string[];
    address: _AddressType3;
};

type _PersonType2 = {
    name: string;
    age: number;
    children: string[];
    occupation: string;
    address: _AddressType3;
};

function _isPerson(animalOrPerson: _AnimalType2 | _PersonType2): animalOrPerson is _PersonType2 {
    return Boolean((animalOrPerson as _PersonType2).occupation);
}

function _isAnimal2(animalOrPerson: _AnimalType2 | _PersonType2): animalOrPerson is _AnimalType2 {
    return Boolean((animalOrPerson as _AnimalType2).ability);
}

function _petOrFire(animalOrPerson: _AnimalType2 | _PersonType2): void {
    if (_isPerson(animalOrPerson)) {
        console.log(`Person ${animalOrPerson.name} with occupation ${animalOrPerson.occupation} has been fired.`)
    } else if (_isAnimal2(animalOrPerson)) {
        if (_isAnimal2(animalOrPerson)) {
            console.log(`Animal ${animalOrPerson.name} has been pet and will now ${animalOrPerson.ability}.`)
        }
    }
}

_petOrFire(_person2); // John should be fired.
_petOrFire(_animal2); // We don't fire animals, we pet them!