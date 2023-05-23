import { mouseOverHome, mouseOutHome, mouseOverAbout, mouseOutAbout, mouseOverPortfolio,
    mouseOutPortfolio, mouseOverContact, mouseOutContact, mouseOverLinkedIn, mouseOutLinkedIn, mouseOverGitHub, mouseOutGitHub
} from "./utils.js";

export default class DisplayController {
    #sections;
    #buttonMap;
    constructor() {
        // the sections in the website
        this.#sections = ["section-home", "section-about", "section-portfolio",
            "section-contact"];

        /*
        create a map that will hold the ids for the section buttons and the methods associated
        with each button
        */
        this.#buttonMap = new Map();
        this.#buttonMap.set("side-button-linked-in", [mouseOverLinkedIn, mouseOutLinkedIn]);
        this.#buttonMap.set("side-button-github", [mouseOverGitHub, mouseOutGitHub]);
        this.#buttonMap.set("side-button-home", [this.displayHome, mouseOverHome, mouseOutHome]);
        this.#buttonMap.set("side-button-about", [this.displayAbout, mouseOverAbout, mouseOutAbout]);
        this.#buttonMap.set("side-button-portfolio", [this.displayPortfolio, mouseOverPortfolio, mouseOutPortfolio]);
        this.#buttonMap.set("side-button-contact", [this.displayContact, mouseOverContact, mouseOutContact]);
    };

    // Updates which sections to hide and display
    #updateDisplay(sectionToDisplay) {
        this.#sections.forEach((value) => {
            const element = document.getElementById(value);
            if (element) {
                if (value === sectionToDisplay) {
                    element.removeAttribute("hidden");
                } else {
                    element.setAttribute("hidden", "");
                }
            }
        })
    };

    // displays the home section and hids the other sections
    displayHome() {
        this.#updateDisplay("section-home");
    };

    // displays the about section and hids the other sections
    displayAbout() {
        this.#updateDisplay("section-about");
    };

    // displays the portfolio section and hids the other sections
    displayPortfolio() {
        this.#updateDisplay("section-portfolio");
    };

    // displays the contact section and hids the other sections
    displayContact() {
        this.#updateDisplay("section-contact");
    };

    // Adds event listeners for each of the section buttons
    addEventListeners() {
        this.#buttonMap.forEach((value, key) => {
            const element = document.getElementById(key)
            if (element) {
                if (value.length === 3) {
                    element.addEventListener("click", value[0].bind(this));
                    element.addEventListener("mouseover", value[1].bind(this));
                    element.addEventListener("mouseout", value[2].bind(this));
                } else {
                    element.addEventListener("mouseover", value[0].bind(this));
                    element.addEventListener("mouseout", value[1].bind(this));
                }
            }
        })
        document.getElementById("about-me-button").addEventListener("click", this.displayAbout.bind(this));
    };
}