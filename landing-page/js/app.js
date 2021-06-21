/**
 * //01022748319
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
    //when clicked on anchor,it go to the current section 
    goToRightSection(currentSection)
    //the next two lines change the color of the section word in nave bar 
    //and the section in page when click on section in nave bar
    a.className = "active_class";
    currentSection.className = "active_class";
});
// need to change it's place??!!!!
a.className = "non_active_class";
currentSection.className = "non_active_class";

    console.log(ul);//only for test code
}

//this loop for create five element in nav bar
let sectionID=0;
let sections = document.querySelectorAll("section");
var allTop = [];
for(var i=0;i<sections.length;i++){
    sectionID = sections[i].getAttribute("id");
    createNavElement(sectionID);  //to create all sections
}
 //getActiveSection using getBoundingClientRect function
for(var i=0;i<sections.length;i++){
    sectionID = sections[i].getAttribute("id");
    let sec = document.getElementById(sectionID);
    var top = getActiveSection(sec);
    allTop.push(top);
    console.log("top   --  " + top); // it is not work it is print "top   --  [object Window]"
}
//to get the current section 
/**
 * 1- remove the negative values
 * 2- choose the min is current
 */
var maxTop = Math.max(...allTop);

let newTops=[];
for(i of allTop){
    if (i>0){
        newTops.push(i);
    }
}
var minTop = Math.min(...newTops);
var sectionIndex = allTop.indexOf(minTop);// it is section number of the current section
let currSection = document.getElementById("section"+sectionIndex+1);

// this function will scrolling smoothly to the section required --> it's parameter the section getting by Id
function goToRightSection(sectionRequire){
    sectionRequire.scrollIntoView({behavior: "smooth"});
}

let section = document.getElementById(sectionID);
var ancorClicked = document.getElementById(sectionID+"a");
// this fuction return the top of every section and need one parameter is the section element getten by ID
function getActiveSection(section){
    var rectangle = section.getBoundingClientRect();
    var t = rectangle.top; // t is variable contain the top of the section
    return t;
}



// when click on the section it is color change in bar and in the page background












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


