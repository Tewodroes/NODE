//node js program to add numbers until the user enters stop

const rl = require('readline').createInterface({ 
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
let num = 0;

function addNumbers() {
    rl.question('Enter a number or "stop" to quit: ', input => {
        if (input === 'stop') {
            console.log(`The sum of all the numbers entered is ${sum}`);
            rl.close();
        } else {
            num = parseInt(input);
            sum += num;
            addNumbers();
        }
    });
}


addNumbers();




