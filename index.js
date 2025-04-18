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