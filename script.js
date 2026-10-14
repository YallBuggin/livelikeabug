
const slides = document.querySelectorAll(".hero-slide");
const counter = document.querySelector("#slide-counter");
const nextButton = document.querySelector("#next-slide");
const previousButton = document.querySelector("#previous-slide");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});


setInterval(() => {
    showSlide(currentSlide + 1);
}, 6000);


const slides = document.querySelectorAll(".hero-slide");
const counter = document.querySelector("#slide-counter");
const nextButton = document.querySelector("#next-slide");
const previousButton = document.querySelector("#previous-slide");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 6000);
