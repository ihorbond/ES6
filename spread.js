const reptiles = ['snake', 'lizard'];
const mammals = ['puppy', 'kitten'];
let moreReptiles = ['alligator', ...foods]; // -> alligator, snake, lizard

let reptilesCopy = [...reptiles]; //creates a copy of reptiles array

const megaAnimalsArray = [...reptiles, ...mammals];
console.log (megaAnimalsArray);
// ['snake', 'lizard', 'puppy', 'kitten']
