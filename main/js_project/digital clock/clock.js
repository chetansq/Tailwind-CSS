let clock = document.getElementById("clock");

console.log(clock);

function clock_on() {

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


};



