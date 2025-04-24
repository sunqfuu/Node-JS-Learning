"use strict";



console.log("hello world!");

let number = 5;
console.log(number);

let number2 = 10;
console.log(number2);

//////////////////////////// ES 5 ///////////////////////////
// String Access
let stringAccessFunction = () => {
  let data1 = "Sunqfu Node JS";
  console.log(data1.charAt(0));
  console.log(data1[0]);
};

// ES 5 Multiline

//ES 5 Multiline String
let multiLineNowFunction = () => {
  let multiLineString = "1.Satır\n" + "2.satır\n" + "3.satır\n";
  let multiLine = `Hello
World
This
is
a
multiline
string
`;
  console.log(multiLine);
  console.log(multiLineString);
};

//ES 5 Date Now
let dateNowFunction = () => {
  let currentTimeMillis = Date.now();
  console.log(currentTimeMillis);
};

// ES 5 trim()
let trimFunction = () => {
  const sunqfuTrim = "   Node JS Learning ";
  console.log(sunqfuTrim);
  console.log(sunqfuTrim.length);
  console.log(sunqfuTrim.trim().length);

};
trimFunction();

const personObject = function () {
  let person = {
    name: "Steven",
    surname: "Wilson",
    number: 44,
    isLogin: true,
  }
  return person;
}

// ES 5 - JSON.stringify() JSON.parse()

let jsonStringifyParseFunction = () => {
  const person = personObject();
  let stringifyObject = JSON.stringify(person);
  console.log(stringifyObject);

  let parseObject = JSON.parse(stringifyObject);
  console.log(parseObject);
}
jsonStringifyParseFunction();


// ES 5 - isArray ()
let isArrayFunction = () => {
  let array = [1, 2, 3, 4, 5];
  let arrayData = Array.isArray(array);
  console.log(arrayData);
  if (arrayData) {
    console.log("This is an array.");
  } else {
    console.log("This is not an array.");
  }
}

isArrayFunction();

// ES 5 - forEach ()
let forEachFunction = () => {
  let array = [1, 2, 3, 4, 5];
  let arrayData = array.forEach((response) => {
    console.log(response * 2);
  })

}

forEachFunction();

// ES 5 - map ()

let mapFunction = () => {
  let array = [1, 2, 3, 4, 5];
  let arrayData = array.map((response) => {
    return response * 2;
  })
  console.log(arrayData);
}
mapFunction();

// ES 5 - filter ()
let filterFunction = () => {
  let array = [1, 2, 3, 4, 5];
  let arrayData = array.filter((response) => {
    response % 2 === 0;

  }).forEach((response) => {
    console.log(response);
  })
  console.log(arrayData);
}

filterFunction();

// ES 5 - reduce ()
let reduceFunction = () => {
  let array = [1, 2, 3, 4, 5, 6];
  let sum = array.reduce((one, two) => {
    return one + two;
  }, 0);
  console.log(sum);
}

reduceFunction();

// ES 5 - ReduceRight ()
let ReduceRightFunction = () => {
  let array = [1, 2, 3, 4, 5, 6];
  let sum = array.reduceRight((one, two) => {
    return one + two;
  }, 0);
  console.log(sum);
}

ReduceRightFunction();

// ES 5 - every ()
let everyFunction = () => {
  let array = [1, 2, 3, 4, 5, 6, 7];
  let isResult = array.every((response) => {
    return response > 0;
  })
  const data = (isResult) ? "Sıfırdan Büyük" : "Sıfırdan Küçük";
  console.log(data);
}

everyFunction();

// ES 5 - some ()

let someFunction = () => {
  let array = [1, 2, 3, 4, 5, 6, 7];
  let isResult = array.some((response) => {
    return response % 2 === 0;
  })
  const data = (isResult) ? "Bir tane şart sağlanıyor" : "Sağlamıyor";
  console.log(data);
}

someFunction();

// ES 5 - indexOf ()

let indexOfFunction = () => {
  let array = [1, 2, 3, 5, 2];
  let isResult = array.indexOf(2);
  console.log("soldan " + isResult);
}
indexOfFunction();

// ES 5 - lastIndexOf ()

let lastIndexOfFunction = () => {
  let array = [1, 2, 3, 5, 2];
  let isResult = array.lastIndexOf(2);
  console.log("sağdan " + isResult);
}
lastIndexOfFunction();