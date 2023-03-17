const func = require('./index.js');

const validTickets = [
  { source: 'Amsterdam', destination: 'Berlin' },
  { source: 'Paris', destination: 'London' },
  { source: 'London', destination: 'Amsterdam' },
];

const invalidTickets = [
  { source: 'Amsterdam' },
  { source: 11, destination: 'London' },
  { source: 'London', destination: 'Amsterdam' },
];

const result = 'Paris, London, Amsterdam, Berlin';

test('shows itenary when tickets format is valid', () => {
  expect(func.countriesExtractor(validTickets)).toBe(result);
});

test('shows error message when tickets format is invalid', () => {
  expect(() => func.countriesExtractor(invalidTickets)).toThrow(
    'Invalid ticket format'
  );
});

test('shows error message when ticket is an empty array', () => {
  expect(() => func.countriesExtractor([])).toThrow('Ticket is an empty array');
});
