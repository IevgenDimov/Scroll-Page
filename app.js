// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels



// ********** set date ************
// The getFullYear() method returns the year of the specified date according to local time.
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();





// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function(){
    

    // The Element.getBoundingClientRect() method returns a DOMRect object providing
    //     information about the size of an element and its position relative to the viewport.    
   
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const linksHeight = links.getBoundingClientRect().height;


    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
      } else {
        linksContainer.style.height = 0;
      }

   
    // linksContainer.classList.toggle('show-links')
})
// ********** fixed navbar ************
 const navbar = document.getElementById('nav')
 const topLink = document.querySelector('.top-link')
 
 

window.addEventListener('scroll', function (){
  // checks the y coordinates of the window (the y-coordinate at the bottom of the window)
 const scrollHeight = window.pageYOffset;
//  getting the height of a navbar
 const navHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
})

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
  link.addEventListener('click', function (e) {
    // prevents the default settings from being executed
    e.preventDefault();
    //  navigate to a specific spot

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height

    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position = position - navHeight;
    }
    if(navHeight > 82){
      position = position + containerHeight;
    }

    window.scrollTo({
      left:0, 
      top: position,
    });
    linksContainer.style.height = 0;
  });
})

// ********** smooth scroll ************
// select links
