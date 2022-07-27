/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 4/5: Make use of the enum type in as much places as possible in the code below.
 * ----------------------------------------------------------------------------------------------------
 */

enum Environment {
    production = 'production',
    acceptance = 'acceptance',
    testing = 'testing'
};

function capitalize(text: string): string {
    return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
}

function getReadableEnvironment(env: Environment): string {
    if (!Environment[env]) {
        return 'No matching environment found!';
    } else {
        return capitalize(Environment[env]);
    }
}

const exerciseData = [Environment.acceptance, Environment.testing, Environment.production];

getReadableEnvironment(exerciseData[0]);
getReadableEnvironment(exerciseData[1]);
getReadableEnvironment(exerciseData[2]);

/*
 * We have some resistor data (color and value).
 * We now would like to have a function which gets a name of a color as an argument and retrieves the resistance value.
 * Black: 5
 * Brown: 6
 * Red: 7
 * Orange: 8
 * Yellow: 9
 * Green: 10
 * Blue: 11
 * Violet: 12
 * Grey: 13
 * White: 14
 */

enum ResistorColorName {
    BLACK = 'Black',
    BROWN = 'Brown',
    RED = 'Red',
    ORANGE = 'Orange',
    YELLOW = 'Yellow',
    GREEN = 'Green',
    BLUE = 'Blue',
    VIOLET = 'Violet',
    GREY = 'Grey',
    WHITE = 'White',
};

enum ResistorColorValue {
    Black = 5,
    Brown = 6,
    Red = 7,
    Orange = 8,
    Yellow = 9,
    Green = 10,
    Blue = 11,
    Violet = 12,
    Grey = 13,
    White = 14,
};

function getResistanceValue(name: ResistorColorName): ResistorColorValue {
    return ResistorColorValue[name];
}

getResistanceValue(ResistorColorName.BLACK);