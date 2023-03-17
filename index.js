// Intro:
// One travel agency faced a problem with corrupted database, containing customer's trips. IT department was able to recover tickets linked to specific users.
// Unfortunately, tickets contain only source and destination cities without any other information. Help travel agency to restore original trip for specific users.

// Task:
// Write a function that accepts array of tickets, where ticket has format {source: string, destination: string} and returns string of comma separated countries as it was originally planned.

// Example:
// tickets: [{source: 'Amsterdam', destination: 'Berlin'},{source: 'Paris', destination: 'London'},{source: 'London', destination: 'Amsterdam'},]
// result: 'Paris, London, Amsterdam, Berlin'

function countriesExtractor(tickets) {
  let destinations = {};
  let cities = [];

  //throws error if tickets array is empty
  if (tickets.length == 0) {
    throw new Error('Ticket is an empty array');
  }

  //check if tickets format is correct else throw an error
  for (let i = 0; i < tickets.length; i++) {
    const { source, destination } = tickets[i];
    if (typeof source !== 'string' || typeof destination !== 'string') {
      throw new Error('Invalid ticket format');
    }
  }

  //change tickets array to an object of format {source:destination, source: destination , etc}
  destinations = tickets.reduce((obj, ticket) => {
    obj[ticket.source] = ticket.destination;
    return obj;
  }, {});

  //get the start of the trip. We find the city that is only a source not a destination
  let start = '';
  for (let source in destinations) {
    if (!Object.values(destinations).includes(source)) {
      start = source;
      break;
    }
  }

  //then based on the start city, we find the destination, then destination becomes a start and we find the other destination and so on
  while (start in destinations) {
    cities.push(start);
    start = destinations[start];
  }
  cities.push(start);

  //add a comma for the cities in cities array
  return cities.join(', ');
}

try {
  const tickets = [
    { source: 'Amsterdam', destination: 'Berlin' },
    { source: 'Paris', destination: 'London' },
    { source: 'London', destination: 'Amsterdam' },
  ];

  console.log(countriesExtractor(tickets));
} catch (err) {
  console.error(err.message);
}

module.exports = {
  countriesExtractor,
};
