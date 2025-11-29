// menu.js — Clean, Matched, Responsive Navigation
document.addEventListener('DOMContentLoaded', function () {

  // Build the navigation markup
  const navHTML = `
    <nav>
      <div class="nav-container">
        
        <!-- Logo -->
        <div class="nav-logo">
          <a href="/">
            <img src="https://rss-feed-tiktok.s3.us-east-2.amazonaws.com/BESS+200x50+light+background.png"
                 alt="Socially Smashing Logo">
          </a>
        </div>

        <!-- Desktop + Mobile Menu -->
        <ul class="nav-menu" id="navMenu">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        <!-- Mobile Toggle -->
        <button class="mobile-menu-toggle" id="mobileToggle">☰</button>
      </div>
    </nav>
  `;

  // Insert navigation at very beginning of <body>
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Mobile menu toggle
  document.getElementById('mobileToggle').addEventListener('click', function () {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
  });

});
