
function create_() {

    if (document.getElementById('text').value != " " && document.getElementById('text').value != "") {


        var div = document.createElement("div");
        div.classList = `flex justify-between items-center div`;
        div.innerHTML = `<p contenteditable="false" class="paragraph" id="p">${document.getElementById('text').value}</p><i class="fa-solid fa-pen-to-square editButton"></i>
            <i class="fa-solid fa-xmark deleteButton"></i>`;

        document.getElementById("wrapper").appendChild(div);

        document.getElementById('text').value = "";
    }
    else {
        alert("ENTER THE VALID INPUT");
    }
}

document.getElementById("wrapper").addEventListener("click", (remove_) => {
    if (remove_.target.classList.contains("deleteButton")) {
        remove_.target.parentElement.remove();
    }
})

document.getElementById("wrapper").addEventListener("click", (add) => {
    if (add.target.classList.contains("editButton")) {
        if (add.target.parentElement.firstChild.getAttribute("contenteditable") == "true") {
            add.target.parentElement.firstChild.setAttribute("contenteditable", "false");
            add.target.parentElement.firstChild.style.backgroundColor = "rgb(145, 159, 173)";
            add.target.parentElement.firstChild.style.color = "white";

        }
        else {
            add.target.parentElement.firstChild.setAttribute("contenteditable", "true");
            add.target.parentElement.firstChild.style.backgroundColor = "lightgray";
            add.target.parentElement.firstChild.style.color = "black";

        }
    }
})








