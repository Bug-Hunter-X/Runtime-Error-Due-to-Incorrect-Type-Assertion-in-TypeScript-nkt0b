function add(a: number, b: number): number {
  return a + b; 
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number = 8
let result2 = subtract(10, 4); // result2: number = 6

//Corrected - No type assertion needed, input values are numbers
let result3 = add(5, 3); // result3: number = 8
let result4 = add(10,4); // result4: number = 14