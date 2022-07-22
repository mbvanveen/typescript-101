/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 3/5: Union Types & casting
 * Correctly type the argument type (Record<string, unknown>) of the function below without using the any or unknown keywords.
 * You will see that you probably have to correct the logic in isAnimal to make TypeScript
 * understand what you are trying to do.
 * 
 * FYI: Use type casting very wisely, since you are overruling TypeScript.
 * ----------------------------------------------------------------------------------------------------
 */

const _person = {
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

const _animal = {
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

type _AddressType2 = {
    houseNumber: number;
    street: string;
    zipCode: string;
}

type _AnimalType = {
    name: string;
    age: number;
    children: string[];
    address: _AddressType2;
};

type _PersonType = {
    name: string;
    age: number;
    children: string[];
    occupation: string;
    address: _AddressType2;
};

function _isAnimal(animalOrPerson: _AnimalType | _PersonType): boolean {
    return !Boolean((animalOrPerson as _PersonType).occupation);
}

_isAnimal(_person); // Should return false
_isAnimal(_animal); // Should return true