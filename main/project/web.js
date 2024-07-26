
const blog = document.getElementById("blogbtn");
const blogPage = document.getElementById("blogpage");
let currentPage = document.getElementById("homepage");

blog.addEventListener("click", () => {
    currentPage.classList.add("hidden");
    currentPage = blogPage;
    currentPage.classList.remove("hidden");

})