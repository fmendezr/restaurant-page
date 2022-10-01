import "./style.css";

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
    contactBtn.textContent = "Contact Us"

    // add style 
    header.setAttribute("id", "header");
    homeBtn.classList.add("navBtn");
    menuBtn.classList.add("navBtn");
    contactBtn.classList.add("navBtn");
}

componentHeader();