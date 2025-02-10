# Runtime Error Due to Incorrect Type Assertion in TypeScript

This example demonstrates a common error in TypeScript where type assertions bypass type checking, potentially leading to runtime errors.  The `add` function is designed to operate on numbers, but a type assertion allows strings to be passed, resulting in string concatenation instead of numerical addition.

## How to Reproduce

1. Clone the repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the JavaScript code.
4. Observe the unexpected string concatenation.

## Solution

The solution involves removing the incorrect type assertion and ensuring that the function receives the correct input types.  The `bugSolution.ts` file shows this solution.  See README for more info on this particular solution.