import profilePic from "./img/home/Hattori_Hanzo.jpeg";

const componentHome = () => {

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

export {componentHome}