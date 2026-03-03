// footer.js — Socially Smashing
// LOCKED VERSION — Do not modify until site rebuild is complete.
// This footer will be copied as inline HTML into index.html once
// all other sections (header, schema, CTA, optin) are finalized.

document.addEventListener('DOMContentLoaded', function () {

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">

        <!-- Column 1: Contact -->
        <div class="footer-col">
          <h3>Contact</h3>
          <p>
            <a href="https://www.linkedin.com/in/nicolejolie/" target="_blank" rel="noopener noreferrer">
              <strong>Nicole Jolie</strong>
            </a><br>
            AI Strategy &amp; Consulting
          </p>
          <p class="footer-tagline">
            "Are you recommended by AI or just listed? Find out with an AI Authority Report."
          </p>
        </div>

        <!-- Column 2: Legal (Pages 1–5) -->
        <div class="footer-col">
          <h3>Legal</h3>
          <ul class="footer-links">
            <li><a href="/legal/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="/legal/terms-of-service.html">Terms of Service</a></li>
            <li><a href="/legal/earnings-disclaimer.html">Earnings Disclaimer</a></li>
            <li><a href="/legal/affiliate-disclaimer.html">Affiliate Disclaimer</a></li>
            <li><a href="/legal/legal-disclaimer.html">Legal Disclaimer</a></li>
          </ul>
        </div>

        <!-- Column 3: Legal (Pages 6–11) -->
        <div class="footer-col">
          <h3>&nbsp;</h3>
          <ul class="footer-links">
            <li><a href="/legal/refund-policy.html">Refund Policy</a></li>
            <li><a href="/legal/dmca-policy.html">DMCA Policy</a></li>
            <li><a href="/legal/gdpr-ccpa-policy.html">GDPR &amp; CCPA Policy</a></li>
            <li><a href="/legal/anti-class-action.html">Anti-Class Action</a></li>
            <li><a href="/legal/optin-agreement.html">Optin Agreement</a></li>
            <li><a href="/legal/testimonial-disclaimer.html">Testimonial Disclaimer</a></li>
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
