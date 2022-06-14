const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//capitalize the first letter
//const firstLetter = (tutorials) => tutorials[0][0].toUpperCase() + tutorials[0].slice(1)
//console.log(firstLetter)

//splitting a sentence
//const splitting = tutorials[0].split(' ').map(firstLetter);
//console.log(splitting)
//const joining = splitting.join(' ');
//console.log(joining);

const titleCased = () =>{
  return tutorials.map(sentence => sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" "))
 }



 console.log(titleCased);
