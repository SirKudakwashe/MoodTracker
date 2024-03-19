// Typescript

function add(a: number, b: number): number {
  return a + b;
}

console.log( add(5 , 7))


// write in typescript

interface User {
  name : string,
  id:number,
}

const user :User = {
  name : "kudakwashe", 
  id:32
}

class LandlordAccount {
  name:string;
  id:number;
  constructor(name:string, id:number){
    this.name = name;
    this.id = id
  }
}

class TenantAccount {
  name:string;
  id:number;
  constructor(name:string, id:number){
    this.name = name;
    this.id = id
  }
}



// composing types - there are two ways to dod this with unions and generics 

// a popular use case for union types is  too describe the state of string or number literals that  a value is allowed to be as shown below

type LockState = "open" | "closed";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//  functions are the primary means of passing data around in javascript 












