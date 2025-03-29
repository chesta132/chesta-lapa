// preloader
gsap.fromTo('.preloader',
    {yPercent: 0},
    {
        yPercent: -100,
        duration: 1.5,
        delay: 4
    }
);

gsap.fromTo('body',
    {
        overflow: 'hidden'
    },
    {
        overflow: 'visible',
        delay: 4.5
    }
)

function hidePreloader() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
};

setTimeout(hidePreloader, 6000);

// navbar
const hamburger = document.getElementById('hamburger');
const iHam = document.getElementById('iham');
const navbarNav = document.querySelector('.navbar-nav');
const navBar = document.querySelector('.navbar');

// onclick hamburger
hamburger.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
    
    if (navbarNav.classList.contains('active')) {
        iHam.className = ('fa-solid fa-xmark text-[30px]');
        document.body.classList.add('darker');
    } else {
        iHam.className = ('fa-solid fa-bars text-[25px]');
        document.body.classList.remove('darker');
    }
});
// onclick !navbar

document.addEventListener('click', function(e) {
    if(!navBar.contains(e.target)) {
        navbarNav.classList.remove('active');
        document.body.classList.remove('darker');
        iHam.className = ('fa-solid fa-bars text-[25px]');
    }
})

// animation
window.addEventListener('scroll', () => {
    let contents = document.querySelectorAll('.anim');
    
    contents.forEach(content => {
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.15;
        
        if(contentPosition < screenPosition) {
            content.classList.add('scrolled');
        } else {
            content.classList.remove('scrolled');
        }
    });
});

