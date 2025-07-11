// Login Page Logic
document.addEventListener('DOMContentLoaded', () => {
    const birthdayForm = document.getElementById('birthdayForm');
    if (birthdayForm) {
        birthdayForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const dobInput = document.getElementById('dob').value;
            const errorMessage = document.getElementById('errorMessage');
            const correctDOB = "29/07/49"; // Correct answer

            if (dobInput === correctDOB) {
                window.location.href = 'main.html'; // Redirect to the main birthday page
            } else {
                errorMessage.textContent = 'วันเดือนปีเกิดไม่ถูกต้อง ลองใหม่อีกครั้ง';
            }
        });
    }

    // Birthday Page Pop-up Logic
    const birthdayPopup = document.getElementById('birthdayPopup');
    if (birthdayPopup) {
        // Show popup when the main.html loads
        birthdayPopup.style.display = 'flex';
    }
});

function closePopup() {
    const birthdayPopup = document.getElementById('birthdayPopup');
    if (birthdayPopup) {
        birthdayPopup.style.display = 'none';
    }
}

// Image Slider Logic
let slideIndex = 0;
let slides;

function showSlides(n) {
    slides = document.querySelectorAll('.slider-images img');
    if (slides.length === 0) return; // No images to display

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    const sliderImages = document.querySelector('.slider-images');
    sliderImages.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Initialize slider when main.html loads
document.addEventListener('DOMContentLoaded', () => {
    const sliderImagesContainer = document.querySelector('.slider-images');
    if (sliderImagesContainer) {
        showSlides(slideIndex);
    }
});