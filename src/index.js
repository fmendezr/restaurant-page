import "./style.css";
import profilePic from "./Hattori_Hanzo.jpeg"

const componentHeader = () => {

    // fetch container
    const container =  document.getElementById("content");

    // create elements 
    const header = document.createElement("div");
    const title = document.createElement("h1");
    const navBar = document.createElement("nav");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    // insert elements into DOM 
    container.appendChild(header);
    header.appendChild(title);
    header.appendChild(navBar);
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    // add text content 
    title.textContent = "Hattori's";
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact"

    // add attributes 
    header.setAttribute("id", "header");
    homeBtn.classList.add("navBtn");
    menuBtn.classList.add("navBtn");
    contactBtn.classList.add("navBtn");
}

const componentMainHomePage = () => {

     // fetch container
     const container =  document.getElementById("content");

    // create elements 
    const main = document.createElement("main");
    const txt1 = document.createElement("p");
    const txt2 = document.createElement("p");
    const img = new Image();
    img.src = profilePic;
    const txt3 = document.createElement("p");

    // insert element into HTML
    container.appendChild(main);
    main.appendChild(txt1);
    main.appendChild(txt2);
    main.appendChild(img);
    main.appendChild(txt3);

    // add text content 
    txt1.textContent = "Demon Hanzō's cuisine ";
    txt2.textContent = "In  Edo since 1592";
    txt3.textContent = '"Wake up from death and return to life"';

    // add attributes 
    img.setAttribute("id", "profilePic");
    txt1.classList.add("txt");
    txt2.classList.add("txt");
    txt3.classList.add("txt");
}

const componentFooter = () => {

    // fetch the contianer 
    const container = document.getElementById("content");

    // create elements 
    const footer = document.createElement("div");
    const footerTxt = document.createElement("div")
    const footerLink = document.createElement("a");
    const icon = document.createElement("i");

    // insert elements into HTML 
    container.appendChild(footer);
    footer.appendChild(footerTxt);
    footerTxt.appendChild(footerLink);
    footerLink.appendChild(icon);

    // add text content 
    footerTxt.textContent = "Copyright © 2022 fmendezr "

    // add attributes 
    footer.setAttribute("id", "footer");
    footerTxt.classList.add("txt");
    footerLink.setAttribute("href", "https://github.com/fmendezr");
    icon.classList.add("fa", "fa-github");
    icon.setAttribute("style", "font-size:21px")
}

componentHeader();
componentMainHomePage();
componentFooter();