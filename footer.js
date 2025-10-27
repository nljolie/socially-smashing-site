document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a href="/legal/privacy-policy.html">Privacy Policy</a>
                <a href="/legal/terms-of-service.html">Terms of Service</a>
                <a href="/legal/gdpr-ccpa-policy.html">GDPR & CCPA Policy</a>
                <a href="/legal/affiliate-disclaimer.html">Affiliate Disclaimer</a>
                <a href="/legal/anti-class-action.html">Anti-Class Action Provision</a>
                <a href="/legal/dmca-policy.html">DMCA Policy</a>
                <a href="/legal/earnings-disclaimer.html">Earnings & Results Disclaimer</a>
                <a href="/legal/legal-disclaimer.html">Legal Disclaimer</a>
                <a href="/legal/optin-agreement.html">Optin Agreement</a>
                <a href="/legal/refund-policy.html">Refund Policy</a>
                <a href="/legal/testimonial-disclaimer.html">Testimonial Disclaimer</a>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Socially Smashing. All rights reserved.</p>
                <p>AI Search Optimization Research | Educational Business Consulting</p>
            </div>
        </div>
    </footer>
    `;
    
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});