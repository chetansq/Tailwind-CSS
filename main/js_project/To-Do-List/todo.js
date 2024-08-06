
let add = '';
let id_ = 1;
let d = `p${id_}`;
console.log(d);

function create_() {
    if (add == '') {
        if (document.getElementById('text').value != "") {


            var div = document.createElement("div");
            div.classList = `flex justify-between items-center`;
            div.innerHTML = `<p class="paragraph" id="p${id_}">${document.getElementById('text').value}</p><i class="fa-solid fa-pen-to-square editButton"></i>
            <i class="fa-solid fa-xmark deleteButton"></i>`;

            document.getElementById("wrapper").appendChild(div);

            document.getElementById('text').value = "";
        }
        else {
            alert("ENTER THE VALID INPUT");
        }
    }
    else {
        console.log("value 1", text.value);

        document.getElementById(`p${id_}`).innerText = text.value;
        console.log("value 2", text.value);
        // document.getElementById("1").id += 1;
        document.getElementById('text').value = "";
        id_++;

    }
}

document.getElementById("wrapper").addEventListener("click", (remove_) => {
    if (remove_.target.classList.contains("deleteButton")) {
        remove_.target.parentElement.remove();
    }
})


document.getElementById("wrapper").addEventListener("click", (addnew_) => {
    if (addnew_.target.classList.contains("editButton")) {
        text.value = addnew_.target.parentElement.innerText;
        add = text.value;
    }
})








