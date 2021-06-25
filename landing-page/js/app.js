// Build menu 
/**
 * @description:
 * createNavElement function create elements in nav bar
 * like this <li><a href="section1">Section1</a></li>
 * @param {text} textElement 
 */
function createNavElement(textElement){
    let ul = document.getElementById('navbar__list');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerText=textElement;
    a.id = textElement +"a";
    li.appendChild(a);
    ul.appendChild(li);
    let currentSection = document.getElementById(textElement);
    // TODO: Scroll to section on link click
    a.addEventListener("click", ()=> {
    //TODO: when clicked on anchor,it go to the current section 
    goToRightSection(currentSection)
    //TODO: add css class to active section
    currentSection.classList.add("your-active-class");
});
}
/**
 * @description: goToRightSection function will scrolling smoothly to the section required
    @param {section getting by Id} sectionRequire 
 */
    function goToRightSection(sectionRequire){
        sectionRequire.scrollIntoView({behavior: "smooth"});
    }


//TODO: loop for create five element in nav bar
let sectionID=0;
let sections = document.querySelectorAll("section");
let allTop = [];
for(let i=0;i<sections.length;i++){
    sectionID = sections[i].getAttribute("id");
    createNavElement(sectionID);  //to create all sections
}

/**
 * @description: getActiveSection using getBoundingClientRect function
 *  Add class 'active' to section when near top of viewport
 */
function activeSection(){
for(let i=0;i<sections.length;i++){

    sectionID = sections[i].getAttribute("id");
    
    //to get the current section
    let top = sections[i].getBoundingClientRect().top;
    
    if (top>-100 && top<300){
        sections[i].classList.add("your-active-class");
    
    }else if (sections[i].classList.contains("your-active-class")){
        sections[i].classList.remove("your-active-class");
    }else{
        continue;
    }
    }
}
//TODO: listener when scrolling page
window.addEventListener("scroll", activeSection);
