import { add, subtract, multiply, divide } from "./index";

test("Exarcise 1: addieren", () => {
  const addieren = add(2, 3);
  expect(addieren).toBe(5);

  const addieren1 = add(-2, -8);
  expect(addieren1).toBeLessThan(0);

  const addieren2 = add(0.1, 0.2);
  expect(addieren2).toBeCloseTo(0.3);
});

test("Exarcise 2: sub", () => {
  const sub = subtract(15, 5);
  expect(sub).toBe(10);

  const sub1 = subtract(-2, 10);
  expect(sub1).toBeLessThan(0);
});

test("Exarcise 3: multy", () => {
  const mul = multiply(2, 4);
  expect(mul).toBe(8);

  const mul1 = multiply(-2, 2);
  expect(mul1).toBeLessThan(0);

  const mul2 = multiply(2, -2);
  expect(mul2).toBeLessThan(0);

  const mul3 = multiply(-2, -2);
  expect(mul3).toBeCloseTo(4);
});

test("Exarcise 3: divide", () => {
  const div = divide(9, 3);
  expect(div).toBe(3);

  const div1 = divide(2, 0);
  expect(div1).toBe("You should not do this!");
});
