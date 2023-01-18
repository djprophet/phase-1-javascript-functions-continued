
//Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" 
//Fill in the ... with the activity that's passed in as the first parameter. 
//If nothing is passed in, default to "roller-skate".


function outer(greeting = "Hey", msg = "It's a fine day to learn" ) {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  return innerFunction("student", "JavaScript"); 
}

outer("Hello");
console.log(outer())


function outers(greetings = "Hey", msgss = "It's a fine day to learn") {
  const innerFunctions = function (names, langs = "Python") {
    return `${greetings}, ${names}! ${msgss} ${langs}`;
  };
  return innerFunctions; // closure 
}
outers("Hello")("student", "Javascript")
console.log(outers("Hello")("student", "Javascript"));

function outof(greet, messy = "It's a fine day to learn") {
    return function(namely, langly ="Python") {
    return `${greet}, ${namely}! ${messy} ${langly}`;
  };
}

outof("hello")("student", "Javascript")
console.log(outof("hello")("student", "Javascript"))

 
const array = (function (thingToAdd,thingtwo) {
  const base = 3;
  return [function () {
    return base + thingToAdd+thingtwo;},
    function () {return base;},
  ];
})(2,5);

array[0]; //=> ƒ () { return base + thingToAdd; } //closures 
array[1]; //=> ƒ () { return base; } //closures 

array[0]();
array[1]();

console.log(array[0]())
console.log(array[1]())



let dc = function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
   console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}

dc("Dr. Stephen Strange")()();


let dcd =  demoChain = (name , friend)  => {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
   console.log(`${part1.toUpperCase()} ${part2} ${name} and Mr.${friend}`);
    };
  };
}

dcd("Dr. Stephen Strange", "Tony Stark")()();



// Code solution below 

function saturdayFun(Activity = "roller-skate") {
return`This Saturday, I want to ${Activity}!`
}
saturdayFun("ride my bike");



let mondayWork = function(workish = 'go to the office')  {
    return `This Monday, I will ${workish}.`;
};

mondayWork(' work from home')



function wrapAdjective(message = "*", enc ="||")  {
  return function innerFunction(uselater = "a hardworker", usenow = "a dedicated programmer") {
 return `You are ${message}${uselater}${message}!`;
  };
}
const encourageme = wrapAdjective()


console.log(encourageme( ))