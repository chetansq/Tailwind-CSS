let intext = document.getElementById('text');
let ptag = document.getElementById('p');

function create_() {
    ptag.innerText = intext.value;

    var li = document.createElement("li");
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("close");

    console.log(txt);
    span.className = "close";

    span.appendChild(txt);
    li.appendChild(span);


}