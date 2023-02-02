//create the blog data
const categories = [
    'World', 
    'Canada',
    'Technology', 
    'Design'
]

const blogs = [
    {
        category: 'World',
        title: 'Featured post',
        date: 'Nov 12',
        description:  'This is a wider card with supporting text below as a natural lead-in to additional content',
        link: '/'
    },
    {
        category: 'Design',
        title: 'Featured post',
        date: 'Nov 11',
        description:  'This is a wider card with supporting text below as a natural lead-in to additional content',
        link: '/' 
    }
]

/*** DOM ***/
console.log(document.links)

/*** Finding HTML Elements ***/
//Select element by ID.
const $main = document.getElementById('main')
console.log( $main )

//Select element by any CSS selector
const $canadaCategory = document.querySelector('nav a:nth-child(2)')
console.log( $canadaCategory  )

const $categories = document.querySelector ('nav a')
console.log( $categories[0])
//practice CSS selectors
console.log( document.querySelectorAll([href="cdn"]))
console.log(document.querySelector)
// console.log(document.querySelectorAll('nav a:not(nav a:last-child)'))

/*** Traversing the DOM  ***/
// console.log( $main.children  )
// console.log( $main.childNodes )
// console.log( $main.firstElementsChild  )
// console.log( $main.nextElementSibling )

/*** Manipulating attributes */
//getAttribute()
//Obtain the id of the main element

//exception calling attributes as properties
// console.log( $main.className )
// console.log( $main.style);
// console.log( $main.getAttribute('style'));
// console.log(typeof $main.getAttribute('style'));

//setAttribute
//create the id jumbotron; first div element of main

//Add  'text-bg-dark' class to the element with id jumbotron; warning!

//Add the href attribute to the 'continue reading...' link from jumbotron; https://imdac.github.io/mtm6302/
// element.setAttribute('target', '_blank');
// console.log(element.getAttribute('class')); // text-bg-dark
// console.log(element.getAttribute('href')); // https://imdac.github.io/mtm6302/
// console.log(element.getAttribute('target')); // _blank

//Remove
//Remove the attribute 'target' from the 'continue reading...' link
// console.log(element.getAttribute('target')); // null 



/*** Manipulating classes ***/
// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' o the element with id jumbotron
// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]

// Remove class
// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]

// Toggle class
//obtain the 'dark mode' button, and save it to $darkModeBtn const
// $darkModeBtn.addEventListener('click', function() {
//     toggle class here
// })

//contains() and boolean condition
// console.log(element.classList.contains('position-relative')) // ?
// console.log(element.classList.contains('text-bg-dark'))      // ?
// const i = 5;
// const condition = i > 0;
// element.classList.toggle('text-bg-dark', condition) //Toggle class
// console.log(element.classList) // ?





