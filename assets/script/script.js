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
        overflow: 'hidden',
    },
    {
        overflow: 'visible',
        delay: 4.5
    }
)

function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
};
setTimeout(hidePreloader, 6000);

function showContent() {
    const contentWrapper = document.querySelector('body > *:not(.preloader)');
    contentWrapper.style.display = 'block';
};
setTimeout(showContent, 3500);


// navbar
const hamburger = document.getElementById('hamburger');
const iHam = document.getElementById('iham');
const navbarNav = document.querySelector('.navbar-nav');
const navBar = document.querySelector('.navbar');

function updateHam() {
    if (navbarNav.classList.contains('active')) {
        iHam.classList.add('opened');
        document.body.classList.add('darker');
    } else {
        iHam.classList.remove('opened');
        document.body.classList.remove('darker');
    };
};

// onclick hamburger
hamburger.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
    updateHam();
});
// onclick !navbar

document.addEventListener('click', function(e) {
    if(!navBar.contains(e.target)) {
        navbarNav.classList.remove('active');
        updateHam();
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

