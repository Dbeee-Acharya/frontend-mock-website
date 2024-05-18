
// Animation for slide in when scrolling 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("go-up")
        } else {
            entry.target.classList.remove("go-up")
        }
    });
});

const observerFade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("fade-in")
        } else {
            entry.target.classList.remove("fade-in")
        }
    });
});

// Animation for accordion 

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsDown = document.querySelectorAll(".hidden-down");
hiddenElementsDown.forEach((el) => observerUp.observe(el));

const hiddenElementsFade = document.querySelectorAll(".hidden-fade");
hiddenElementsFade.forEach((el) => observerFade.observe(el));
