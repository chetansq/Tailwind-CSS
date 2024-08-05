
let add = '';
let id_ = 1;

function create_() {
    if (add == '') {
        if (document.getElementById('text').value != "") {


            var div = document.createElement("div");
            div.classList = `flex justify-between items-center`;
            div.innerHTML = `<p class="paragraph" id="p">${document.getElementById('text').value}</p><i class="fa-solid fa-pen-to-square editButton"></i>
            <i class="fa-solid fa-xmark deleteButton"></i>`;

            document.getElementById("wrapper").appendChild(div);

            document.getElementById('text').value = "";
        }
        else {
            alert("ENTER THE VALID INPUT");
        }
    }
    else {
        console.log(text.value);

        document.getElementById("p").innerText = text.value;
        // document.getElementById("1").id += 1;
        document.getElementById('text').value = "";
        id_++;

    }
}

document.getElementById("wrapper").addEventListener("click", (Create_) => {
    if (Create_.target.classList.contains("deleteButton")) {
        Create_.target.parentElement.remove();
    }
})


document.getElementById("wrapper").addEventListener("click", (Create_) => {
    if (Create_.target.classList.contains("editButton")) {
        text.value = Create_.target.parentElement.innerText;
        add = text.value;
    }
})





