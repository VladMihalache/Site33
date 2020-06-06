/*----------------  imports  ----------------*/

/*----------------  tabs  ----------------*/
(function() {
    const siteScripts = {
        init: function() {
            this.enableDropDownMenu()
        },
        enableDropDownMenu: function() {
            
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
        },
    }

    siteScripts.init()


    
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
    
    const helpButton1=document.querySelector(".helpButton")
    const helpContent1=document.querySelector(".helpContent")
    
    const plus=document.querySelector(".plus")
    const minus=document.querySelector(".minus")
    
    function help(){
        helpButton1.addEventListener("click", ()=>{
            minus.classList.toggle("displayNone")
            plus.classList.toggle("displayNone")
    
        if(helpContent1.style.maxHeight){
            helpContent1.style.maxHeight=null;
        }else{
            helpContent1.style.maxHeight=helpContent1.scrollHeight + "px";
        }
      })  
    }
    
    help();
    /*----------------  accordion  ----------------*/
    document.addEventListener('click', function (event) {
        // debugger;
        if (event.target.classList.contains('accordionButton')) {
            event.target.classList.toggle('is-open')
            const content=event.target.nextElementSibling;
    
            if(content.style.maxHeight){
                content.style.maxHeight=null;
            }else{
                content.style.maxHeight=content.scrollHeight + "px";
            }
        }
    })
})()