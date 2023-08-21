// icon toggle
'use strict';
const homeBtn = document.querySelector(".home-btn");
const xmark = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");

homeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

xmark.addEventListener('click', () => {
    sidebar.classList.remove("show-sidebar");
});

//background toggle
const darkBtn = document.querySelector(".light-btn");
const heading = document.querySelectorAll('a, button');
const container = document.querySelectorAll('body,#exp .container,.exp-box');

darkBtn.addEventListener("click", () => {

    container.forEach((e) => {
        e.classList.toggle("light")
    });

    heading.forEach((e) => {
        e.classList.toggle("light-heading")
    });
});


//bottom to top button
let myTopBtn = document.getElementById("myTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myTopBtn.style.display = "block";
    } else {
        myTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

