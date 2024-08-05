function create_() {
    if (document.getElementById('text').value !== "") {

        var div = document.createElement("div");
        div.classList = `flex justify-between items-center`;
        div.innerHTML = `<p class="paragraph">${document.getElementById('text').value}</p>
        <i class="fa-solid fa-xmark deleteButton"></i>`;


        document.getElementById("wrapper").appendChild(div);

        document.getElementById('text').value = "";
    }
    else {
        alert("ENTER THE VALID INPUT");
    }
}

document.getElementById("wrapper").addEventListener("click", (ansh) => {
    if (ansh.target.classList.contains("deleteButton")) {
        ansh.target.parentElement.remove();
    }
})