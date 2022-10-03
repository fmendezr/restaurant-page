import profilePic from "./img/home/Hattori_Hanzo.jpeg";
import dumplingImg from "./img/menu/dumpling.svg";
import gyozaImg from "./img/menu/gyoza.svg";
import nigiriImg from "./img/menu/nigiri.svg";
import onigiriImg from "./img/menu/onigiri.svg";
import pufferFishImg from "./img/menu/pufferFish.svg";
import ramenImg from "./img/menu/ramen.svg";
import riceBowlImg  from "./img/menu/riceBowl.svg";
import sushiRollImg from "./img/menu/sushiRoll.svg";
import houseImg from "./img/contact/house.svg";
import phoneImg from "./img/contact/phone.svg";
import mapImg from "./img/contact/map.jpeg";

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
}

const componentMenu = () => {
    
    //fetch container 
    const container = document.getElementById("content");
    
    // set up main
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
}

const componentContact = () => {

    //fetch container 
    const container = document.getElementById("content");

    // set up main
    const main = document.createElement("main");
    container.appendChild(main)
    main.classList.add("contact");

    // create elements 
    const phoneDiv = document.createElement("div");
    const phoneNumber = document.createElement("p");
    const phoneIconImg = new Image();
    phoneIconImg.src = phoneImg;
    const directionDiv = document.createElement("div");
    const direction = document.createElement("p");
    const houseIconImg = new Image()
    houseIconImg.src = houseImg;
    const imgMap = new Image();
    imgMap.src = mapImg;

    // insert element into DOM 
    main.appendChild(phoneDiv);
    phoneDiv.appendChild(phoneIconImg);
    phoneDiv.appendChild(phoneNumber);
    main.appendChild(directionDiv);
    directionDiv.appendChild(houseIconImg);
    directionDiv.appendChild(direction);
    main.appendChild(imgMap);

    // add text content 
    phoneNumber.textContent = "+81 03-3224-9999";
    direction.textContent = "Edo"

    // add attributes
    phoneIconImg.classList.add("icon");
    houseIconImg.classList.add("icon");
    phoneDiv.id = "phoneDiv";
    directionDiv.id = "directionDiv";
    phoneNumber.id = "phoneNumber";
    direction.id = "direction";
    imgMap.id = "map";

    console.log("Do you know the story of the scorpion and the frog?");
}

export {componentHome, componentMenu, componentContact};