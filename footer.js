document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("site-footer");

  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">

        <div class="footer-brand">
          <a href="index.html" class="footer-logo">Open Mile</a>
          <p>
            A place for fresh perspectives, practical inspiration,
            and stories that make everyday exploration more enjoyable.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="disclaimer.html">Disclaimer</a>
          <a href="terms-of-service.html">Terms of Service</a>
        </nav>

      </div>

      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Open Mile. All rights reserved.</p>
      </div>
    </footer>
  `;

  const style = document.createElement("style");

  style.textContent = `
    .site-footer {
      margin-top: 80px;
      background: #173B46;
      color: #f2f7f8;
    }

    .footer-inner {
      max-width: 1140px;
      margin: 0 auto;
      padding: 58px 24px 45px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 50px;
    }

    .footer-brand {
      max-width: 440px;
    }

    .footer-logo {
      color: #ffffff;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }

    .footer-brand p {
      margin: 15px 0 0;
      color: #c6d5d8;
      font-size: 14px;
      line-height: 1.7;
    }

    .footer-nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 12px 24px;
      padding-top: 4px;
    }

    .footer-nav a {
      color: #e1eaec;
      font-size: 13px;
      font-weight: 700;
      transition: color 0.2s ease;
    }

    .footer-nav a:hover {
      color: #8fb8c1;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.13);
      text-align: center;
      padding: 20px 24px;
    }

    .footer-bottom p {
      margin: 0;
      color: #b7c8cc;
      font-size: 12px;
    }

    @media (max-width: 760px) {
      .footer-inner {
        padding: 45px 20px 35px;
        flex-direction: column;
        gap: 28px;
      }

      .footer-nav {
        justify-content: flex-start;
      }
    }
  `;

  document.head.appendChild(style);
});