import "./style.css";
import componentHeader from "./header.js";
import {componentHome, componentMenu, componentContact} from "./mainElements.js";
import componentFooter from "./footer.js";

componentHeader();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click", () => {

    // clear 
    const main = document.querySelector("main");
    const footer = document.getElementById("footer");
    main.remove();
    footer.remove();

    // set style 
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    contactBtn.classList.remove('active')

    // add new content
    componentHome();
    componentFooter();
})

menuBtn.addEventListener("click", () => {
    
    // clear
    const main = document.querySelector("main");
    const footer = document.getElementById("footer");
    main.remove();
    footer.remove();

    // set style
    menuBtn.classList.add("active");
    contactBtn.classList.remove('active');
    homeBtn.classList.remove("active");

    // add new content
    componentMenu();
    componentFooter();
})

contactBtn.addEventListener("click", () => {

    // clear 
    const main = document.querySelector("main");
    const footer = document.getElementById("footer");
    main.remove();
    footer.remove();

    // set style 
    contactBtn.classList.add('active');
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");

    // add new content 
    componentContact();
    componentFooter();
})

componentHome();
componentFooter();