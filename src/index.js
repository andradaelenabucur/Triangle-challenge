const checkTriangleTypeBySideLengths = require("./Triangle/Triangle");

const readline = require('readline');
const process = require('process');

let sideA, sideB, sideC;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insert sideA value:', (answer) => {
    sideA = Number(answer);
    rl.question('Insert sideB value:', (answer) => {
        sideB = Number(answer);
        rl.question('Insert sideC value:', (answer) => {
            sideC = Number(answer);
            checkTriangleTypeBySideLengths(sideA, sideB, sideC);
            rl.close();
        });
    });
});
