fetch = require('node-fetch');

const url = 'https://kodaktor.ru/j/ips';

fetch(url)
.then(res => res.json())
.then(ips => {
  const frequencies = {};
  const sortedFrequencies = {};

  // Map frequencies
  ips.forEach(element => {
    const ip = element['ip'];  // Used as frequencies object key

    numOfVisits = frequencies[ip];
    if (numOfVisits == undefined) { frequencies[ip] = 1; }
    else { frequencies[ip]++; }
  });

  // Sort them
  const keys = Object.keys(frequencies);
  keys.sort((lf, rf) => frequencies[lf] - frequencies[rf])
  .reverse()
  .forEach(key => sortedFrequencies[key] = frequencies[key]);

  // a :: Number of different ips
  const numOfDiff = keys.length;
  // b  :: Number of ips with only one visit
  let ones = 0;
  keys.forEach(key => {
    if (frequencies[key] == 1) { ones++; }
  })
  // c :: Max frequence
  const maxFrequence = frequencies[keys[0]];
});
