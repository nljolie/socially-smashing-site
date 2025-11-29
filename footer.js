// footer.js — Clean footer injected into #footer-placeholder
document.addEventListener('DOMContentLoaded', function () {

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        
        <!-- Column 1: Contact -->
        <div class="footer-col">
          <h3>Contact</h3>
          <p>
            <strong>Socially Smashing</strong><br>
            AI Search Optimization<br>
            Research & Consulting
          </p>
          <p>
            <a href="mailto:nicole@sociallysmashing.com">nicole@sociallysmashing.com</a>
          </p>
        </div>

        <!-- Column 2: Site Links -->
        <div class="footer-col">
          <h3>Explore</h3>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <!-- Column 3: Legal -->
        <div class="footer-col">
          <h3>Legal</h3>
          <ul class="footer-links">
            <li><a href="/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/terms-of-service.html">Terms of Service</a></li>
            <li><a href="/earnings-disclaimer.html">Earnings Disclaimer</a></li>
          </ul>
        </div>

      </div>

      <div class="container">
        <div class="footer-bottom">
          &copy; 2025 Socially Smashing. All rights reserved.
        </div>
      </div>
    </footer>
  `;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  }
});
