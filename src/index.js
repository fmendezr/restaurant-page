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

    // add style 
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
    const text1 = document.createElement("p");
    const text2 = document.createElement("p");
    const img = new Image();
    img.src = profilePic;
    const text3 = document.createElement("p");

    // insert element into HTML
    container.appendChild(main);
    main.appendChild(text1);
    main.appendChild(text2);
    main.appendChild(img);
    main.appendChild(text3);

    // add text content 
    text1.textContent = "Demon Hanzō's cuisine ";
    text2.textContent = "In  Edo since 1592";
    text3.textContent = '"Wake up from death and return to life"';

    // add style 
    img.setAttribute("id", "profilePic");
    text1.classList.add("txt");
    text2.classList.add("txt");
    text3.classList.add("txt");
}


componentHeader();
componentMainHomePage();