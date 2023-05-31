 import add from "./rest_parameters";

test("it adds together all the numbers in the argument", () => {
  expect(add(1, 2,3)).toBe(6);

  expect(add(1, 2, 3, 4)).toBe(10);
});
