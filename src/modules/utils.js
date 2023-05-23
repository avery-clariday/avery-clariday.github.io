function mouseOver(id, text) {
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).style.fontSize = "15px";
    document.getElementById(id).innerText = text;
}

function mouseOut(id, className) {
    const icon = document.createElement("i");
    icon.setAttribute("class", className);
    document.getElementById(id).innerText = "";
    document.getElementById(id).style.fontSize = "";
    document.getElementById(id).appendChild(icon);
}

export function mouseOverLinkedIn() {
    mouseOver("side-button-linked-in", "Linked In");
}

export function mouseOutLinkedIn() {
    mouseOut("side-button-linked-in", "fa-brands fa-linkedin");
}

export function mouseOverGitHub() {
    mouseOver("side-button-github", "GitHub");
}

export function mouseOutGitHub() {
    mouseOut("side-button-github", "fa-brands fa-github");
}

export function mouseOverHome() {
    mouseOver("side-button-home", "Home");
}

export function mouseOutHome() {
    mouseOut("side-button-home", "fa-solid fa-house")
}

export function mouseOverAbout() {
    mouseOver("side-button-about", "About");
}

export function mouseOutAbout() {
    mouseOut("side-button-about", "fa-solid fa-user");
}

export function mouseOverPortfolio() {
    mouseOver("side-button-portfolio", "Portfolio");
}

export function mouseOutPortfolio() {
    mouseOut("side-button-portfolio", "fa-solid fa-briefcase");
}

export function mouseOverContact() {
    mouseOver("side-button-contact", "Contact");
}

export function mouseOutContact() {
    mouseOut("side-button-contact", "fa-solid fa-envelope");
}