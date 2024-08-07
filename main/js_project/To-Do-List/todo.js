
let id_ = 1;
let d = `p${id_}`;
console.log(d);

function create_() {

    if (document.getElementById('text').value != "") {


        var div = document.createElement("div");
        div.classList = `flex justify-between items-center`;
        div.innerHTML = `<p contenteditable="false" class="paragraph" id="p${id_}">${document.getElementById('text').value}</p><i class="fa-solid fa-pen-to-square editButton"></i>
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


document.getElementById("wrapper").addEventListener("click", (addnew_) => {
    if (addnew_.target.classList.contains("editButton")) {
        if (addnew_.target.parentElement.firstChild.getAttribute("contenteditable") == "true") {
            addnew_.target.parentElement.firstChild.setAttribute("contenteditable", "false")
        }
        else {
            addnew_.target.parentElement.firstChild.setAttribute("contenteditable", "true")

        }
    }
})








