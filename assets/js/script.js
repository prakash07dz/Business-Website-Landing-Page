// navbar icon
const ham_menu = document.querySelector(".hamburger-menu");
const nav_header = document.querySelector('.nav-container');



const toggleNavbar = () => {
nav_header.classList.toggle("active");
}

ham_menu.addEventListener('click', ()=> toggleNavbar());



// accordion-list
 
  document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      item.addEventListener('click', function () {
        accordionItems.forEach(innerItem => {
          if (innerItem !== item) {
            innerItem.classList.remove('active');
          }
        });

        item.classList.toggle('active');
      });
    });
  });

