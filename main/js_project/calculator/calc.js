{



    // let one = document.getElementById("one");
    // let two = document.getElementById("two");
    // let three = document.getElementById("three");
    // let four = document.getElementById("four");
    // let five = document.getElementById("five");
    // let six = document.getElementById("six");
    // let seven = document.getElementById("seven");
    // let eight = document.getElementById("eight");
    // let nine = document.getElementById("nine");
    // let addition = document.getElementById("addition");
    // let sub = document.getElementById("sub");
    // let multiply = document.getElementById("multiply");
    // let module = document.getElementById("module");
    // let divide = document.getElementById("divide");
    // let zero = document.getElementById("zero");
    // let equal = document.getElementById("equal");
    // let dot = document.getElementById("dot");

    // let clr = document.getElementById("clr");
    // let allclr = document.getElementById("allclr");

    // let dis = document.getElementById("dis");

    // one.addEventListener("click", () => {

    //     document.getElementById("dis").value += 1;

    // })

    // two.addEventListener("click", () => {

    //     document.getElementById("dis").value += 2;

    // })
    // three.addEventListener("click", () => {

    //     document.getElementById("dis").value += 3;

    // })

    // four.addEventListener("click", () => {

    //     document.getElementById("dis").value += 4;

    // })

    // five.addEventListener("click", () => {

    //     document.getElementById("dis").value += 5;

    // })

    // six.addEventListener("click", () => {

    //     document.getElementById("dis").value += 6;

    // })

    // seven.addEventListener("click", () => {

    //     document.getElementById("dis").value += 7;

    // })

    // eight.addEventListener("click", () => {

    //     document.getElementById("dis").value += 8;

    // })

    // nine.addEventListener("click", () => {

    //     document.getElementById("dis").value += 9;

    // })

    // zero.addEventListener("click", () => {

    //     document.getElementById("dis").value += 0;

    // })

    // addition.addEventListener("click", () => {

    //     document.getElementById("dis").value += '+';

    // })
    // sub.addEventListener("click", () => {

    //     document.getElementById("dis").value += '-';

    // })
    // multiply.addEventListener("click", () => {

    //     document.getElementById("dis").value += '*';

    // })
    // module.addEventListener("click", () => {

    //     document.getElementById("dis").value += '%';

    // })

    // divide.addEventListener("click", () => {

    //     document.getElementById("dis").value += '/';

    // })

    // dot.addEventListener("click", () => {

    //     document.getElementById("dis").value += '.';

    // })

    // equal.addEventListener("click", () => {
    //     let total = document.getElementById("dis").value;
    //     // let a = Number(total);
    //     let all = eval(total);
    //     document.getElementById("dis").value = all;
    // })

    // allclr.addEventListener("click", () => {
    //     document.getElementById('dis').value = "";
    // })

    // clr.addEventListener("click", () => {
    //     document.getElementById('dis').value;
    //     let del = delete (1);
    //     document.getElementById('dis'), value = del;
    // })

    // allclr.addEventListener("click", e => {
    //     document.getElementById('dis').value = "";
    //     e.target.matches('button');

    // })

}

let output = document.getElementById("output");
output.innerHTML = "";
let numbers = document.querySelectorAll(".num");

let symbols = document.querySelectorAll(".sym");

let secondout = document.getElementById("secondout");

let allclr = document.querySelector(".allclr");
let equal = document.getElementById("equal");

let firstValue;
let secondValue;
let symbol;
var c = 0;
var total;
symbols.forEach(ele => {
    ele.addEventListener("click", function () {
        if (c == 0) {

            firstValue = output.innerText;
            console.log("first value", firstValue);
        } else {

            firstValue = total;
            console.log("first value", firstValue);
        }


        symbol = ele.innerText;
        console.log("symbol", symbol);
        output.innerText += ele.innerText;

        secondout.innerText = output.innerText;

        output.innerText = '';
    })
});

numbers.forEach(ele => {

    ele.addEventListener("click", function () {
        output.innerText += ele.innerText;
        // console.log("second value", output);
    })
});

allclr.addEventListener("click", () => {
    output.innerText = "";
    secondout.innerText = "";
})

equal.addEventListener("click", () => {
    secondValue = output.innerText;
    firstValue = +firstValue;
    secondValue = +secondValue;

    console.log("second value", secondValue);

    switch (symbol) {
        case '+':

            total = firstValue + secondValue;
            c++;
            // console.log(c);
            break;

        case '-':
            total = firstValue - secondValue;
            c++;
            break;

        case '*':
            total = firstValue * secondValue;
            c++;
            break;

        case '/':
            total = firstValue / secondValue;
            c++;
            break;

        case '%':
            total = firstValue % secondValue;
            c++;
            break;
    }

    secondout.innerText = total;
    output.innerText = total;
    // firstValue.innerText = output.innerText;
    // console.log("total is ", total);
    // console.log("first is ", output);
    output.innerText = "";

})













