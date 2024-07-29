let clock = document.getElementById("clock");
let btn = document.getElementById("btn");

console.log(clock);

btn.addEventListener("click", () => {

    setInterval(interval, 1000);

    function interval() {


        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let dates = h + " : " + m + " : " + s;
        clock.innerText = dates;
        clock.style.visibility = "visible";
    }


});
clock.style.border = "2px solid white";


