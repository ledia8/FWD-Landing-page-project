/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functionswujiu
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//function create elements in nav bar
//like this <li><a href="section1">Section1</a></li>
// console.log("I am in js");//only for test code

function createNavElement(textElement){
    // console.log("I am in function");//only for test code
    let ul = document.getElementById('navbar__list');
    let li = document.createElement('li');//li --> list
    let a = document.createElement('a');// a --> ancor
    a.innerText=textElement;
    a.id = textElement +"a";
    li.appendChild(a);
    ul.appendChild(li);
    let currentSection = document.getElementById(textElement);
    a.addEventListener("click", ()=> {
    goToRightSection(currentSection)
});
    console.log(ul);//only for test code
}
//this loop for create five element in nav bar
let sectionID=0;
let sections = document.querySelectorAll("section");
for(var i=0;i<sections.length;i++){
    // sectionID = "section"+i;
    sectionID = sections[i].getAttribute("id");
    createNavElement(sectionID);  //to create all sections
}
// this function will scrolling smoothly to the section required --> it's parameter the section getting by Id
function goToRightSection(sectionRequire){
    sectionRequire.scrollIntoView({behavior: "smooth"});
}
//get the section and it's ancor and when clicked on anchor,it go to the section 
let section = document.getElementById(sectionID);
var ancorClicked = document.getElementById(sectionID+"a");
// ancorClicked.onclick = goToRightSection(section);





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


