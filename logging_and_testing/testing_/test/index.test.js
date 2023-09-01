// require the functions and app from index.js.
const { add, error, app } = require("../index");

// node.js library to test APIs. [other framework includes mocha and chai.]
const supertest = require("supertest");

// test to check if the result of add(1, 2) is exactly equal to 3.
test("toBe", () => {
  expect(add(1, 2)).toBe(3);
});

// test to check if the result of add(1, 2) is deeply equal to 3.
test("toEqual", () => {
  expect(add(1, 2)).toEqual(3);
});

// test to check if the result of add(1, 2) is defined.
test("toBeDefined", () => {
  expect(add(1, 2)).toBeDefined();
});

// test to check if the result of add(1, 2) is not null.
test("toBeNull", () => {
  expect(add(1, 2)).not.toBeNull();
});

// test to check if the result of add(1, 2) is greater than 1.
test("toBeGreaterThan", () => {
  expect(add(1, 2)).toBeGreaterThan(1);
});

// test to check if the result of add(1, 2) is not less than 2.
test("toBeLessThan", () => {
  expect(add(1, 2)).not.toBeLessThan(2);
});

// test to check if the result of add(1, 2) is less than or equal to 3.
test("toBeLessThanOrEqual", () => {
  expect(add(1, 2)).toBeLessThanOrEqual(3);
});

// test to check if the result of add(1.13, 2.34) is close to 3.465.
test("toBeCloseTo", () => {
  expect(add(1.13, 2.34)).toBeCloseTo(3.465);
});

// test to check if the result of adding "Good " and "Morning" matches the regular expression /Good/.
test("toMatch", () => {
  expect(add("Good ", "Morning")).toMatch(/Good/);
});

// test to check if calling the error function throws an error message.
test("toThrow", () => {
  expect(() => error()).toThrow("There is an error!!");
});

// test to make a GET request to the /users API endpoint.
test("test GET users API", async () => {
  // make a GET request to the /users endpoint using supertest.
  await supertest(app)
    .get("/users")
    // expect a 200 status code in the response.
    .expect(200)
    .then((data) => {
      // ensure that the response data is an object.
      expect(data && data.body && typeof data.body === "object");
    });
});
