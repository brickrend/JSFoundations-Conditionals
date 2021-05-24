/* const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`); */

const num1 = 5
const num2 = 23
const operation = "*"
const num3 = num1 * num2

if (operation === "+"){
    console.log(`wrong answer`)
}else if (operation === "/"){
    console.log(`false`)
}else if (operation === "*"){
    console.log(`${num1} * ${num2} = ${num3}`)
}else{
    console.log(`not correct`)
}