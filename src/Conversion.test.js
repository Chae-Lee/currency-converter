const Convert = require("./Conversion");

test('convert 1 to 0.5 if the rate is 0.5', () => {
  expect(Convert(1, 0.5)).toBe(0.5);
});

test('convert 1 to 2 if the rate is 2', () => {
    expect(Convert(1, 2)).toBe(2);
  });

  test('convert 100 to 70 if the rate is 0.7', () => {
    expect(Convert(100, 0.7)).toBe(70);
  });