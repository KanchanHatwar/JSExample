document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-slide");
    const nextBtn = document.querySelector(".next-slide");

    let slideIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", function () {
        slideIndex = (slideIndex === 0) ? totalSlides - 1 : slideIndex - 1;
        updateSliderPosition();
    });

    nextBtn.addEventListener("click", function () {
        slideIndex = (slideIndex === totalSlides - 1) ? 0 : slideIndex + 1;
        updateSliderPosition();
    });
});