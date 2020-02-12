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

const bt = document.getElementById("btn");
const dropdownContent1 = document.getElementById("#side1")
const dropdownContent2 = document.getElementById("#side2")


function drop(){
    bt.addEventListener("click", () => {
        dropdownContent1.classList.add("visible")
        dropdownContent2.classList.add("visible")
    })
}

drop();
