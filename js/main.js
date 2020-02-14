/*----------------  imports  ----------------*/

/*----------------  tabs  ----------------*/

const x=200;
const y=100;
console.log(x+y)

const elipse1=document.getElementById("elipse1");
const elipse2=document.getElementById("elipse2");
const elipse3=document.getElementById("elipse3");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
let active=one;
let chosen=elipse1;


function changeOne(){
elipse1.addEventListener("click",() =>{
    chosen.classList.remove("chosen");
    chosen=elipse1;
    chosen.classList.add("chosen");
    active.classList.remove("active");
    active=one;
    active.classList.add("active")
    active.classList.add("appear")
    })
} 

function changeTwo(){
    elipse2.addEventListener("click",() =>{
        chosen.classList.remove("chosen");
        chosen=elipse2;
        chosen.classList.add("chosen");
        active.classList.remove("active");
        active=two;
        active.classList.add("active")
        active.classList.add("appear")
    })
} 

function changeThree(){
    elipse3.addEventListener("click",() =>{
        chosen.classList.remove("chosen");
        chosen=elipse3;
        chosen.classList.add("chosen");
        active.classList.remove("active");
        active=three;
        active.classList.add("active")
        active.classList.add("appear")
    })
} 

changeOne();
changeTwo();
changeThree();

/*----------------  dropdown menu  ----------------*/




function drop(){
    const bt = document.getElementById("bt");
    const dropdownContent1 = document.getElementById("side1")
    const dropdownContent2 = document.getElementById("side2")


    bt.addEventListener("click", () => {
        dropdownContent1.classList.toggle("visible")
        dropdownContent2.classList.toggle("visible")
    })
}

drop();

/*----------------  hovers  ----------------*/

const links=document.querySelectorAll(".nonhome")
const yboxes=document.querySelectorAll(".yellowbox")

function hoverS(selector){
    selector.addEventListener('mouseover', () => {
        selector.classList.remove("changeBack")
        selector.classList.add("change")
    })
    selector.addEventListener("mouseout", () =>{
        selector.classList.remove("change")
        selector.classList.add("changeBack")
    })
}

function lightUp(selector){
    selector.addEventListener('mouseover', () => {
        selector.classList.remove("unlight")
        selector.classList.add("light")
    })
    selector.addEventListener("mouseout", () =>{
        selector.classList.remove("light")
        selector.classList.add("unlight")
    })
}

for (element of listings) {
    hoverS(element)
  } 

for (element of links) {
    hoverS(element)
  } 

for (box of yboxes) {
    lightUp(box)
  } //?

/*----------------  aniamte.js  ----------------*/

