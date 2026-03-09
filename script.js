const username = "seanghay-huort";

fetch(`https://api.github.com/users/${username}/repos`)
.then(res => res.json())
.then(data => {

const container = document.getElementById("github-projects");

data.slice(0,6).forEach(repo => {

const card = document.createElement("div");
card.className = "project";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description provided."}</p>
<a href="${repo.html_url}" target="_blank" class="project-btn">View Code</a>
`;

container.appendChild(card);

});

});


const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("visible");

}

});

});

const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

items.forEach(item => {

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 50){
item.classList.add("show");
}

});

});