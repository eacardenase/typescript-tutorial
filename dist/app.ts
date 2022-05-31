// /**
//  * Create a promise tha resolves after some time
//  * @param n number of milliseconds before promise resolves
//  */
// function timeout(n: number) {
//     return new Promise((res) => setTimeout(res, n));
// }

// /**
//  * Add two numbers
//  * @param a first number
//  * @param b second number
//  */
// export async function addNumbers(a: number, b: number) {
//     await timeout(500);
//     return a + b;
// }

// (async () => {
//     console.log(await addNumbers(3, 4));
// })();

// //////////////
// Variables and Types

// let age = 6; // number type is inferred. In TS, variables are born with their types.

// const age = 6; // literal type

// type annotation

// between 500 and 1000
// const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

// let sartTime = new Date();
// let endTime: Date;

// setTimeout(() => {
//     // endTime = 0; type error
//     endTime = new Date();
// }, RANDOM_WAIT_TIME);

// ///////////
// function add(a: number, b: number): number {
//     return a + b;
// }

// const result = add(1, 2);
// console.log(result);

// /////////////

// objects, arrays and tuples
// let car: {
//     make: string;
//     model: string;
//     year: number;
// }

// function printCar(car: {
//     make: string;
//     model: string;
//     year: number;
// }) {
//     console.log(`${car.make} ${car.model} ${car.year}`);
    
// }

// //////////
// function printCar(car: {
//     make: string;
//     model: string;
//     year: number;
//     chargeVoltage?: number; // optional properties
// }) {
//     let str = `${car.make} ${car.model} ${car.year}`;
//     car.chargeVoltage; // number | undefined

//     // type guard
//     if (typeof car.chargeVoltage !== "undefined") {
//         str += `// ${car.chargeVoltage}v`
//     }

//     console.log(str);
    
// }

// // Works
// printCar({
//     make: "Honda",
//     model: "Accord",
//     year: 2017
// })

// // Also works
// printCar({
//     make: "Tesla",
//     model: "Model 3",
//     year: 2020,
//     chargeVoltage: 220
// })

// ////////////////
// dictionaries?

// index signature
// const phones = {
//     home: { country: "+1", area: "211", number: "652-4515" },
//     work: { country: "+1", area: "670", number: "652-4515" },
//     fax: { country: "+1", area: "322", number: "652-4515" },
// }

// const phones: {
//     [k: string]: {
//         country: string;
//         area: string;
//         number: number;
//     }  | undefined
// } = {}

// phones.fax