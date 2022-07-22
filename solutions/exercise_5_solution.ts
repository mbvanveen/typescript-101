/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 5/5: Refactor the code below to make use of Utility Types.
 * ---------------------------------------------------------------------------------------------------- 
*/

type _UserDataType = {
    name: string;
    age: number;
    phone?: string;
    city?: string;
    email?: string;
};

type _OptionallyOverrideUserDataType = Partial<_UserDataType>;

function _optionallyOverrideUserData(userData: _UserDataType, overrideData: _OptionallyOverrideUserDataType): _UserDataType {
    return {
        ...userData,
        ...overrideData
    }
}

_optionallyOverrideUserData(
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
);

type _RequiredUserDataType = Required<_UserDataType>;

function _overrideAllUserData(userData: _UserDataType, overrideData: _RequiredUserDataType): _UserDataType {
    return {
        ...userData,
        ...overrideData
    }
}

_overrideAllUserData(
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
);

type _UserEmailAndNameType = Pick<_UserDataType, 'email' | 'name'>;

function _getUserEmailAndName(userData: _UserDataType): _UserEmailAndNameType {
    return {
        email: userData.email,
        name: userData.name
    }
}

type _ReadOnlyUserDataType = Readonly<_UserDataType>;

type _UsersByNameType = Record<string, _UserDataType>;

function _mapUsersByName(users: _UserDataType[]): _UsersByNameType {
    return users.reduce((acc, curr) => {
        return {
            ...acc,
            [curr.name]: curr
        };
    }, {});
}

// 🤔
type _UsersByNameExcludingCityType = Record<string, Omit<_UserDataType, 'city'>>;

function _mapUsersByNameExcludingCity(users: _UserDataType[]): _UsersByNameExcludingCityType {
    return users.reduce((acc, curr) => {
        const { city, ...rest } = curr;

        return {
            ...acc,
            [curr.name]: rest
        };
    }, {});
}
