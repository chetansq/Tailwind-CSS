// let btn = document.getElementById('btn');
let intext = document.getElementById('text_');
let output = document.getElementById('output');
let word = document.getElementById('word');

let secondout = '';

function Count() {

    output.innerText = intext.value;
    secondout = intext.value;
    console.log(secondout);
    
    let count = 0;
    
    for (let i = 0; i < secondout.length; i++) {

        if (secondout[i] == "e" || secondout[i] == "a" || secondout[i] == "i" || secondout[i] == "o" || secondout[i] == "u" || secondout[i] == "A" || secondout[i] == "E" || secondout[i] == "O" || secondout[i] == "U" || secondout[i] == "I") {

            count++;
        }
    }

    let count1 = secondout.split(" ");
    count1 = count1.length;
    output.innerText = count;
    word.innerText = count1;

}


