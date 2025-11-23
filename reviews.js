// reviews.js - ALL Reviews Component (Images Carousel THEN Videos)

function loadAllReviews() {
    const imageReviews = [
        'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/Tracy+Shudo+5+Star+Review.png',
        'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/April+Waverly+5+Star+Review.png',
        'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/Bill+Williams+5+Star+Review.png',
        'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/Jonathan+Drake+5+Star+Review.png',
        'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/Leah+Day+5+Star+Review.png',
        'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/Mary+Sloan+5+Star+Review.png'
    ];

    const videoReviews = [
        {
            title: 'Shopify Success!',
            url: 'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/%5BTestimonial%5D+Shopify+Success!.mp4'
        },
        {
            title: 'Client Success!',
            url: 'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/%5BTestimonial%5D+Client+Success!.mp4'
        },
        {
            title: 'I Love This, Nicole!',
            url: 'https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/%5BTestimonial%5D+I+Love+This%2C+Nicole!.mp4'
        }
    ];

    const allReviewsHTML = `
        <!-- Image Reviews Carousel FIRST -->
        <div class="carousel-container" style="margin-bottom: 5rem;">
            <div class="carousel-track">
                ${imageReviews.map(imageUrl => `
                    <div class="review-slide">
                        <div class="review-image" style="background-image: url('${imageUrl}');"></div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Video Reviews Section SECOND -->
        <div style="background: white; padding: 3rem 0; text-align: center;">
            <h3 style="font-size: 2.2rem; margin-bottom: 2rem; color: #0E1428;">The Success Clients Achieve When Working With Nicole</h3>
            <p style="font-size: 1.1rem; margin-bottom: 3rem; color: #070707;">Watch this before your next marketing meeting. It could save you thousands.</p>
            
            <div class="video-grid">
                ${videoReviews.map(video => `
                    <div class="video-container">
                        <video controls>
                            <source src="${video.url}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="video-title">${video.title}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const container = document.getElementById('all-reviews');
    if (container) {
        container.innerHTML = allReviewsHTML;
        attachReviewLightbox();
    }
}

function attachReviewLightbox() {
    document.querySelectorAll('.review-image').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.style.backgroundImage.slice(5, -2));
        });
    });
}

function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    const enlargedImg = document.createElement('img');
    enlargedImg.src = imageSrc;
    enlargedImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    
    lightbox.appendChild(enlargedImg);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Auto-load when script runs
loadAllReviews();