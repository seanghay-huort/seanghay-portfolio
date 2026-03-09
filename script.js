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

const skills = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {

skills.forEach(skill => {

const top = skill.getBoundingClientRect().top;

if(top < window.innerHeight){
skill.style.width = skill.classList.contains("swift") ? "95%" :
skill.classList.contains("swiftui") ? "85%" :
skill.classList.contains("uikit") ? "90%" : "80%";

}

});

});

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});

window.addEventListener("load", () => {

const loader = document.getElementById("loader")

setTimeout(()=>{
loader.style.opacity = "0"
loader.style.pointerEvents = "none"
},800)

})

document.addEventListener("mousemove",(e)=>{

const moveX = (e.clientX / window.innerWidth) * 20
const moveY = (e.clientY / window.innerHeight) * 20

document.querySelectorAll("section").forEach(section=>{
section.style.transform = `translateX(${moveX/10}px) translateY(${moveY/10}px)`
})

})

(function(){
emailjs.init("YOUR_PUBLIC_KEY")
})()

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault()

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
).then(()=>{

alert("Message sent!")

})

})