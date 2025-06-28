/* =================== toggle icon navbar ====================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* =================== scroll sections active link ====================== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            });
        }
    });

    /* =================== sticky navbar ====================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* =================== remove toggle icon and navbar when click navbar link (scroll) ====================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* =================== remove toggle icon and navbar when click navbar link ====================== */
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


/* =================== scroll reveal ====================== */
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .header, .main-text span, .experience', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .circle, .text small', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .main-text h2, .skill-left h3, .info p', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skill-right h3', { origin: 'right' });


/* =================== scroll reveal ====================== */
const typed = new Typed('.multiple-text', {
    strings: ['Mobile Developer', 'Frontend Developer', 'FullStack Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* =================== circle skill ====================== */
document.addEventListener('DOMContentLoaded', () => {
    animateCircles();
});

window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    if (isElementInViewport(skillsSection)) {
        animateCircles();
    }
});

document.querySelector('.navbar a').addEventListener('click', (event) => {
    if (event.target.getAttribute('href') === '#skills') {
        setTimeout(() => {
            animateCircles();
        }, 100); // delay to ensure the section is fully in view
    }
});

function animateCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem => {
        const dots = elem.getAttribute("data-dots");
        const marked = elem.getAttribute("data-percent");
        const percent = Math.floor(dots * marked / 100);
        const rotate = 360 / dots;
        let points = "";

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg;"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for (let i = 0; i < percent; i++) {
            setTimeout(() => {
                pointsMarked[i].classList.add('marked');
            }, i * 50); // Adjust the speed of the animation by changing the delay time (50ms)
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}