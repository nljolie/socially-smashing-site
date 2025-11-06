// menu.js - Centralized Navigation Menu
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <nav>
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="/">
                        <img src="https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/BESS+200x50+light+background.png" alt="Socially Smashing Logo">
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    // Insert the navigation at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});