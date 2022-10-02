export default function componentFooter() {

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