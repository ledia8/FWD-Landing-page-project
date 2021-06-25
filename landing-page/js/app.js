// build the nav
//createNavElement function create elements in nav bar
//like this <li><a href="section1">Section1</a></li>

function createNavElement(textElement){
    let ul = document.getElementById('navbar__list');
    let li = document.createElement('li');//li --> list
    let a = document.createElement('a');// a --> ancor
    a.innerText=textElement;
    a.id = textElement +"a";
    li.appendChild(a);
    ul.appendChild(li);
    let currentSection = document.getElementById(textElement);
    a.addEventListener("click", ()=> {
    //when clicked on anchor,it go to the current section 
    goToRightSection(currentSection)

    //the next two lines change the color of the section word in nave bar 
    //and the section in page when click on section in nave bar
    // a.className = "active_class";
    // currentSection.className = "active_class";
});
}

//this loop for create five element in nav bar
let sectionID=0;
let sections = document.querySelectorAll("section");
let allTop = [];
for(let i=0;i<sections.length;i++){
    sectionID = sections[i].getAttribute("id");
    createNavElement(sectionID);  //to create all sections
}

//getActiveSection using getBoundingClientRect function
function activeSection(){
for(let i=0;i<sections.length;i++){

    sectionID = sections[i].getAttribute("id");
    
    //to get the current section
    let top = sections[i].getBoundingClientRect().top;
    
    if (top>-50 && top<300){
        sections[i].classList.add("your-active-class");
    
    }else if (sections[i].classList.contains("your-active-class")){
        sections[i].classList.remove("your-active-class");
    }else{
        continue;
    }
    }
}
//listener when scrolling page
window.addEventListener("scroll", activeSection);


// this function will scrolling smoothly to the section required -->
// it's parameter the section getting by Id
function goToRightSection(sectionRequire){
    sectionRequire.scrollIntoView({behavior: "smooth"});
}















// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


