'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let isinvalley = false;
    let visitedValley = 0
    let value = 0; //counting the number through the change
    for ( let i =0; i<n; i++){
        let count = s.charAt(i) 
        if (count === 'U') {
            value ++  //  U thakle +1
        }
        else{
            value --  //D thakle -1
        }
   if(value < 0 && !isinvalley){  //jodi sea level er nichethake but valley false thake 
                                 //mane hocche vallayr vitorei ache, so 'isinvalley' true kore dei
      isinvalley = true
   } 
   if (value >= 0 && isinvalley) {  //sea level er upore ache but valley ta negativ hye..mane holo ekta vallye travel done, so 'visitedvalley' ke 1 kore barabo
       visitedValley ++; 
       isinvalley = false   // isinvalley ta false kore dilam karon ekhn she sea level                               er opro hy travel end or notun kore kono valley te jabe
   }
   
    }
    return visitedValley;  /// returning from the function 
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
