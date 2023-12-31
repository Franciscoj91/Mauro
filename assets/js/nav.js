let scrollPosition = window.scrollY;
let navBar = document.querySelector('.fixed-top');
let navLinks = document.querySelector('.navbar-nav');

window.onscroll = () => {
    
    let actualScrollPosition = window.scrollY;
    if (scrollPosition >= actualScrollPosition || actualScrollPosition < 0 || scrollPosition < 0) {
        navBar.style.top = '0';
        if (screen.width >= 992) {
            navBar.style.backgroundColor = "#fff";
            navLinks.style.color = "#702E3E";
        }
    } else {
        navBar.style.top = '-150px';
        
    }

    scrollPosition = actualScrollPosition;

    if (scrollPosition < 1) {
        navBar.style.backgroundColor = "transparent";
        navLinks.style.color = "#fff";
    }
}