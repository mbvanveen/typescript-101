/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 5/5: Refactor the code below to make use of Utility Types.
 * ---------------------------------------------------------------------------------------------------- 
*/

type UserDataType = {
    name: string;
    age: number;
    phone?: string;
    city?: string;
    email?: string;
};

type OptionalOverrideUserDataType = Partial<UserDataType>;

function optionalOverrideUserData(userData: UserDataType, overrideData: OptionalOverrideUserDataType): UserDataType {
    return {
        ...userData,
        ...overrideData
    }
}

console.log(optionalOverrideUserData(
    {
        name: 'John',
        age: 50,
        phone: '07354325235',
        email: 'john@email.com'
    },
    {
        email: 'johnsnewemail@email.com',
        city: 'Newark'
    }
));

type RequiredUserDataType = Required<UserDataType>;

function overrideAllUserData(userData: UserDataType, overrideData: RequiredUserDataType): UserDataType {
    return {
        ...userData,
        ...overrideData
    }
}

console.log(overrideAllUserData(
    {
        name: 'John',
        age: 50,
        phone: '07354325235',
        email: 'john@email.com'
    },
    {
        email: 'johnsnewemail@email.com',
        city: 'Newark',
        name: 'Johnny',
        age: 51,
        phone: '007'
    }
));

type UserEmailAndNameType = Pick<UserDataType, 'email' | 'name'>;

function getUserEmailAndName(userData: OptionalOverrideUserDataType): UserEmailAndNameType {
    return {
        email: userData.email || '',
        name: userData.name || ''
    }
}

console.log(getUserEmailAndName({
    name: 'John Snow',
    email: 'john@email.com'
}));

type ReadOnlyUserDataType = Readonly<UserDataType>;
type UsersByNameType = Record<string, UserDataType>;

function mapUsersByName(users: UserDataType[]): UsersByNameType {
    return users.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.name]: curr
        };
    }, {});
}

console.log(mapUsersByName([
    {
        name: 'John Snow',
        age: 50,
        phone: '07354325235',
        email: 'john@email.com',
        city: 'Westeros'
    },
    {
        email: 'mylittleemail@email.com',
        city: 'Newark',
        name: 'Johnny',
        age: 51,
        phone: '007'
    }
]));

// 🤔
type UsersByNameExcludingCityType = Record<string, Omit<UserDataType, 'city'>>;

function mapUsersByNameExcludingCity(users: UserDataType[]): UsersByNameExcludingCityType {
    return users.reduce((acc, curr) => {
        const { city, ...rest } = curr;

        return {
            ...acc,
            [curr.name]: rest
        };
    }, {});
}

console.log(mapUsersByNameExcludingCity([
    {
        name: 'John Snow',
        age: 50,
        phone: '07354325235',
        email: 'john@email.com',
        city: 'Westeros'
    },
    {
        email: 'mylittleemail@email.com',
        city: 'Newark',
        name: 'Johnny',
        age: 51,
        phone: '007'
    }
]));