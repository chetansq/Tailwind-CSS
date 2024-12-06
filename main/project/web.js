
const blog = document.getElementById("blogbtn");
const blogPage = document.getElementById("blogpage");

const contact = document.getElementById("contactbtn");
const contactpage = document.getElementById("contactpage");

const portfolio = document.getElementById("portfoliobtn");
const portfoliopage = document.getElementById("portfoliopage");

const about = document.getElementById("aboutbtn");
const aboutpage = document.getElementById("aboutpage");

const home = document.getElementById("homebtn");
const homepage = document.getElementById("homepage");

let currentPage = document.getElementById("homepage");

blog.addEventListener("click", () => {
    currentPage.classList.add("hidden");
    currentPage = blogPage;
    currentPage.classList.remove("hidden");

})

contact.addEventListener("click", () => {
    currentPage.classList.add("hidden");
    currentPage = contactpage;
    currentPage.classList.remove("hidden");

})

portfolio.addEventListener("click", () => {
    currentPage.classList.add("hidden");
    currentPage = portfoliopage;
    currentPage.classList.remove("hidden");

})

about.addEventListener("click", () => {
    currentPage.classList.add("hidden");
    currentPage = aboutpage;
    currentPage.classList.remove("hidden");

})

home.addEventListener("click", () => {
    currentPage.classList.add("hidden");
    currentPage = homepage;
    currentPage.classList.remove("hidden");

})