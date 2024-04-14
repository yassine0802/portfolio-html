const nav = document.querySelector("nav");
console.log(nav);
const resumeE1 = document.querySelector(".resume-element");
const about = document.querySelector("#about");
console.log(about);
const li = document.querySelector("li");
console.log(li);
const resume = document.getElementById("resume");
console.log(resume);
resume.innerHTML =
 " <h1>hello there resume content is changed</h1> <p>loren ip</p>";
const divAbout = document.createElement("div");
console.log(divAbout);
divAbout.setAttribute("class","about-el");
divAbout.setAttribute("id","about-child");
console.log(divAbout);
const p = document.createElement("p");

p.innerHTML = "jhefgfsrbsrufrhf hsurvurssr ruhsrvv";

divAbout.appendChild(p);
console.log(divAbout);
about.appendChild(divAbout);

nav.style.backgroundColor = "red";
nav.style.width = "50%";
const name = document.querySelector("#name");
console.log(name)
name.classList.add("new-class");
name.classList.remove("new-class");
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    alert("you clicked on the button");
});
