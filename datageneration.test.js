
const storage = require('./server/datageneration.js').storage;



test('storage should contain 100 different properties', () => {
  expect(storage.length).toBe(100);
});

test('storage should be an array', () => {
  expect(Array.isArray(storage)).toBe(true);
});

