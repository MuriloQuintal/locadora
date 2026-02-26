import assert from "assert";
import { add, multiply } from "../build/debug.js";

// Test add function (validate basic addition)
assert.strictEqual(add(1, 2), 3, "add(1,2) should return 3");
assert.strictEqual(add(-1, 5), 4, "add(-1,5) should return 4");

// Test multiply function (validate basic multiplication)
assert.strictEqual(multiply(2, 3), 6, "multiply(2,3) should return 6");
assert.strictEqual(multiply(-2, 4), -8, "multiply(-2,4) should return -8");

console.log("✅ All tests passed!");