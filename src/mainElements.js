import profilePic from "./img/home/Hattori_Hanzo.jpeg";
import dumplingImg from "./img/menu/dumpling.svg";
import gyozaImg from "./img/menu/gyoza.svg";
import nigiriImg from "./img/menu/nigiri.svg";
import onigiriImg from "./img/menu/onigiri.svg";
import pufferFishImg from "./img/menu/pufferFish.svg";
import ramenImg from "./img/menu/ramen.svg";
import riceBowlImg  from "./img/menu/riceBowl.svg";
import sushiRollImg from "./img/menu/sushiRoll.svg";

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
   main.classList.add("home")
   img.id = "profilePic";
   txt1.classList.add("txt");
   txt2.classList.add("txt");
   txt3.classList.add("txt");

   console.log("it's working");
}

const componentMenu = () => {
    
    //fetch container 
    const container = document.getElementById("content");
    
    const main = document.createElement("main");
    container.appendChild(main)
    main.classList.add("menu");

    const imgs = [dumplingImg, gyozaImg, ramenImg, riceBowlImg, nigiriImg, onigiriImg, sushiRollImg, pufferFishImg];
    const foodNames =["Dumplings", "Gyozas", "Ramen", "Rice Bowl", "Nigiri", "Onigiri", "Sushi", "Puffer Fish"];

    for (let i = 0; i < 8; i++){

        //create elements
        let menuItem = document.createElement("div");
        let img = new Image();
        img.src = imgs[i]
        let foodName = document.createElement("h2");
        let description = document.createElement("p");

        // insert into DOM 
        main.appendChild(menuItem);
        menuItem.appendChild(img);
        menuItem.appendChild(foodName);
        menuItem.appendChild(description);

        // add text content
        foodName.textContent = foodNames[i];

        // add attributes 
        menuItem.classList.add("menuItem");
        img.classList.add("menuItemImg");
        foodName.classList.add("foodName");
        description.classList.add("foodDescription");
        description.id = `desc${i}`;        
    }


    console.log("Do you know the story of the scorpion and the frog?")
}

export {componentHome, componentMenu};