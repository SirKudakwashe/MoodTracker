// Typescript
import {Text} from 'react-native';

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(5, 7));

// write in typescript

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'kudakwashe',
  id: 32,
};

class LandlordAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

class TenantAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

type Pet = {
  // TODO: implement the rest of this type
  name: string;
  kind: 'dog' | 'fish' | 'cat';
  age: number;
  favouriteFoods: string[];
  speak?: () => void;
  owner: Owner;
};

type Owner = {
  name: string;
  age: number;
};

const pets: Pet[] = [
  {
    name: 'Fluffy',
    kind: 'cat',
    age: 10,
    favouriteFoods: ['fish', 'chicken'],
    speak: () => console.log('meow'),
    owner: {
      name: 'Sarah',
      age: 18,
    },
  },
  {
    name: 'Teddy',
    kind: 'dog',
    age: 2,
    favouriteFoods: ['anything off your table'],
    speak: () => console.log('woof'),
    owner: {
      name: 'Mary',
      age: 24,
    },
  },

  {
    name: 'Bubbles',
    kind: 'fish',
    age: 1,
    favouriteFoods: ['algae'],
    owner: {
      name: 'Steve',
      age: 30,
    },
  },
];

// composing types - there are two ways to dod this with unions and generics

// a popular use case for union types is  to describe the state of string or number literals that  a value is allowed to be

type LockState = 'open' | 'closed';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//  functions are the primary means of passing data around in javascript
// typescript allows you to specify the types of both the inputs and output vlues of the functions

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toLocaleLowerCase());
  } else {
    console.log(id);
  }
}

printId(5);

// in typescript when you declare a variable you can optionally write a type annnotation to explicitly specify the type of a  variable
export const Greeting: React.FC = () => {
  return <Text>Hello React</Text>;
};

// typing collections  - objects , arrays , tuples
// optional properties are types that can or cannot be available

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} , ${car.model} , ${car.year}`;
  if (typeof car.chargeVoltage !== 'undefined') {
    str += `${car.chargeVoltage.toFixed(2)}`;
  }
  console.log(str);
}

printCar({make: 'bmw', model: '320d', year: 2013});

printCar({make: 'bmw', model: '8 series', year: 2013, chargeVoltage: 234});

// dictionaries

// const phones = {
//   home :{country:"+263" , area:"211" , number:"0782414837"},
//   work :{country:"+33" , area:"212" , number:"0782414837"},
//   fax :{country:"+44" , area:"211" , number:"0782414837"}
// }

// indexes

const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

//  Union and Intesection types

// functions

interface CALCULATE {
  (a: number, b: number): number;
}
// you can aslo use type instead of an interface  as shown below

// type CALCULATE = {
//   (a : number , b : number) : number
// }
const add: CALCULATE = (a, b) => a + b;

console.log(`result: ${add(5, 9)}`);
