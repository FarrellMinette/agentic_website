document.addEventListener('DOMContentLoaded', () => {
    // 1. Define your image sources in a JavaScript array
    const imageUrls = [
        "/images/residential/lifestyle1.jpg",
        "/images/residential/lifestyle2.jpg",
        "/images/residential/lifestyle3.jpg",
        "/images/residential/lifestyle4.jpg"
    ];

    const carouselContainer = document.querySelector('.carousel-container');

    // Create a container to hold all images, making it easy to show/hide
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    // 2. Loop through the images and create an <img> tag for each one
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Gallery Image";
        img.classList.add('carousel-image');
        
        // Only the first image is active by default
        if (index === 0) {
            img.classList.add('active');
        }

        carouselInner.appendChild(img);
    });

    // 3. Insert the new image container into the main carousel div
    carouselContainer.insertBefore(carouselInner, carouselContainer.firstChild);

    // 4. Implement the navigation logic
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = Array.from(carouselInner.querySelectorAll('.carousel-image'));

    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }
});