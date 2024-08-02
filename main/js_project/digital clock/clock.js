function clock_on() {
    setInterval(interval, 1000);
    function interval() {
        let date = new Date();
        document.getElementById("clock").innerText = date.toLocaleTimeString();
    }
};



