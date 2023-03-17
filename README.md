# itinerary-builder

## Problem

Intro:
One travel agency faced a problem with corrupted database, containing customer's trips. IT department was able to recover tickets linked to specific users.
Unfortunately, tickets contain only source and destination cities without any other information. Help travel agency to restore original trip for specific users.

Task:
Write a function that accepts array of tickets, where ticket has format {source: string, destination: string} and returns string of comma separated countries as it was originally planned.

Example:
tickets: [{source: 'Amsterdam', destination: 'Berlin'},{source: 'Paris', destination: 'London'},{source: 'London', destination: 'Amsterdam'},]
result: 'Paris, London, Amsterdam, Berlin'

## Getting Started

### Install

install node modules.

```bash
npm install
```

run code

```bash
node index.js
```

run tests

```bash
npm test
```

## Features

This solution returns a comma separated string with the cities in the trip. In case of empty or wrong formatted trips, an error is thrown.

## Limitations

In case of trips that dont share a source/destination, the returned string will not reflect all trips taken.
