// AssemblyScript entry file (compiles to WebAssembly)
// Docs: https://www.assemblyscript.org

/**
 * Example: Add two numbers (i32 = 32-bit signed integer)
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
export function add(a: i32, b: i32): i32 {
  return a + b;
}

/**
 * Extended example: Multiply two numbers
 */
export function multiply(a: i32, b: i32): i32 {
  return a * b;
}