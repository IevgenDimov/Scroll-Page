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
   
    const containerHeight = linksContainer.getBoundingClientRect()
    const linksHeight = links.getBoundingClientRect().height;

    console.log(linksHeight);

    
   
    // linksContainer.classList.toggle('show-links')
})
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
