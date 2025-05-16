
//Navigation on small screens
const small_nav = document.querySelector(".nav-links");
const menu_btns = document.querySelectorAll(".nav-icons i");
const menu_btns_cont = document.querySelector(".nav-icons");

menu_btns_cont.addEventListener("click", function() {
    console.log("clicked")
    small_nav.classList.toggle("active-small-nav");
     menu_btns.forEach(btn => {
        btn.classList.toggle("close")
     })
})


/* hero section.js */

document.addEventListener('DOMContentLoaded', function() {
    // Headline rotation
    const headlines = document.querySelectorAll('.headline-text');
    let current = 0;
    
    function rotateHeadline() {
        headlines[current].classList.remove('active');
        current = (current + 1) % headlines.length;
        headlines[current].classList.add('active');
    }
    
    setInterval(rotateHeadline, 8000);

    // Initial animation
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'slideUp 1s ease-out forwards';
});

/* Trust bar section */

document.addEventListener('DOMContentLoaded', function() {
    const trustBar = document.querySelector('.trust-bar');
    const trustItems = document.querySelectorAll('.trust-bar div');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trustItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 200);
                });

            }
        });
    }, { threshold: 0.4 });

    observer.observe(trustBar);
  });

 /*Projects Section */

document.addEventListener('DOMContentLoaded', function() {

const projectsSection = document.querySelector('.project-grid');
const projectCards = document.querySelectorAll('.project-card');
console.log("Conted loaded for project section to work", projectCards)

const projects_observer = new IntersectionObserver((entries) => {
    console.log("Project section is working", projectCards, projectsSection)
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            projectCards.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('active');
                }, index * 500);
            });
        }
    });
}, { threshold: 0.1 });

projects_observer.observe(projectsSection);
});



/* About Section */
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-us');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.5
    });
  
    observer.observe(aboutSection);
});



/* Js for services section */

document.addEventListener('DOMContentLoaded', function() {
    const serviceSection = document.querySelector('.services');
    const gridItems = document.querySelectorAll('.service');
  
    const observer = new IntersectionObserver((entries) => {
        console.log("Items are intersecting")
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 300);
                });

            }
        });
    }, { threshold: 0.3 });

    observer.observe(serviceSection);
});




  
/* TESTIMONIALS */
const carousel = document.querySelector('.testimonial-carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoScrollInterval;
let isPaused = false;

// Update function
function updateTestimonial(index) {
    const scrollPosition = index * carousel.offsetWidth;
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}

// Manual controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateTestimonial(index);
        resetAutoScroll();
    });
});

document.querySelector('.next-btn').addEventListener('click', () => {
    updateTestimonial((currentIndex + 1) % dots.length);
    resetAutoScroll();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    updateTestimonial((currentIndex - 1 + dots.length) % dots.length);
    resetAutoScroll();
});

// Auto-scroll setup
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        if (!isPaused) {
            updateTestimonial((currentIndex + 1) % dots.length);
        }
    }, 3000); // 10 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function resetAutoScroll() {
    stopAutoScroll();
    startAutoScroll();
}

// Pause on user interaction
carousel.addEventListener('mouseenter', () => isPaused = true);
carousel.addEventListener('mouseleave', () => isPaused = false);

carousel.addEventListener('touchstart', () => isPaused = true);
carousel.addEventListener('touchend', () => isPaused = false);

// Start auto-scroll on page load
startAutoScroll();

var navLinks = document.querySelectorAll('.nav-link')


/* CONTACT FORM SECTION */

document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('.contact-form-section');
    const contactItems = document.querySelectorAll('.contact-form-section > div');
  
    const observer = new IntersectionObserver((entries) => {
        console.log("Items are intersecting at Contacts")
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 400);
                });

            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
});


/* Sending Emails */

function sendEmail() {
    console.log("The button was pressed")
    const templateParams = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value, 
    }

    emailjs.send("service_nf2hmea", "template_64to3sa", templateParams).then(
        ()=> alert("Email sent!!").catch(() => alert("Email not send!!")))
    }
