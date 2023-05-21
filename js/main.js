// Function to restrict user to enter only digits in the contact field

function restrictToDigits(event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');
}


// Tab Section Home Screen
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


//Javascript for tab navigation horizontal scroll buttons

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);

    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";

}

if(btnRight && btnLeft)
{
    btnRight.addEventListener("click", () => {
        tabMenu.scrollLeft += 150;
        setTimeout(() => {
            IconVisibility();
        }, 50);
    });
    
    
    btnLeft.addEventListener("click", () => {
        tabMenu.scrollLeft -= 150;
        setTimeout(() => {
            IconVisibility();
        }, 50);
    });

    window.onload = function(){
        btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
        btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    }
    
    
    window.onresize = function(){
        btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
        btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    
        let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    
        btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    }
}









//Javascript to make the tab navigation draggable

let activeDrag = false;
if(tabMenu)
{
    tabMenu.addEventListener("mousemove", (drag)=>{
        
        if(!activeDrag) return;
    
        tabMenu.scrollLeft -= drag.movementX;
        IconVisibility();
        tabMenu.classList.add("dragging");
        
    })
    
    tabMenu.addEventListener("mouseup", ()=>{
        
        activeDrag = false;
        tabMenu.classList.remove("dragging");
    
    })
    
    tabMenu.addEventListener("mousedown", ()=>{
        
        activeDrag = true;
    
    })
}

//Javascript to view tab contents on click tab buttons
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

if(tabs && tabBtns){

    const tab_Nav = function(tabBtnClick){
    
        tabBtns.forEach(tabBtn => {
            tabBtn.classList.remove("active");
        });
    
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
    
        tabBtns[tabBtnClick].classList.add("active");
        tabs[tabBtnClick].classList.add("active"); 
    }
    
    tabBtns.forEach((tabBtn, i) => {
        tabBtn.addEventListener("click", () => {
            tab_Nav(i);
        });
    });
}









//  =============================    Quantify Page Carousel     ==========================
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

  