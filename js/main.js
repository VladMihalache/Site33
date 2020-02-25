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


for (element of links) {
    hoverS(element)
  } 

for (box of yboxes) {
    lightUp(box)
  } //?

/*----------------  slider  ----------------*/
const slides=document.querySelectorAll(".item")

let current=0;
let prev=4;
let next=1;

function goToNum(number){
    current=number;
    prev=current-1;
    next=current+1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("current");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("current")
    slides[prev].classList.add("prev")
    slides[next].classList.add("next")

}

function buttonWork(){
const buttons=document.querySelectorAll(".buttonX");

    buttons[0].addEventListener("click", ()=>{
        if(current>0){
            goToNum(current-1)
        }else{
            goToNum(4)
        }
    })
    buttons[1].addEventListener("click",()=>{
        if(current<4){
            goToNum(current+1)
        }else{
            goToNum(0)
        }
    })
}

buttonWork()

/*----------------  helpButton  ----------------*/

/*const accButton1=document.querySelector(".accButton")
const accContent1=document.querySelector(".accContent")

const plus=document.querySelector(".plus")
const minus=document.querySelector(".minus")

function help(){
    accButton1.addEventListener("click", ()=>{
    if(accContent1.style.maxHeight){
        accContent1.style.maxHeight=null;
    }else{
        accContent1.style.maxHeight=accContent1.scrollHeight + "px";
    }
  })  
}

help();
*/
/*----------------  accordion  ----------------*/

/*const accordion1=document.querySelector(".accordionButton1");
const accordion2=document.querySelector(".accordionButton2");
const accordion3=document.querySelector(".accordionButton3");

for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener("click", () => {
        this.style.backgroundColor="#008AFF";
        this.style.color="#D8D8DE"
    })
}

function accordionDrop(acc){
    acc.addEventListener("click", () => {
        dropdownContent1.classList.toggle("visible")
        dropdownContent2.classList.toggle("visible")
    })
}

function open(acc){
    acc.classList.toggle("is-opened")
}

accordionDrop(accordion1)
accordionDrop(accordion2)
accordionDrop(accordion3)
*/
const accordions = document.querySelectorAll(".accordionButton")

for(let i = 0 ; i < accordions.length ; i++){
    accordions[i].onclick = function () {
        this.classList.toggle('is-open')
        const content=this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }else{
            content.style.maxHeight=content.scrollHeight + "px";
        }
    }
}