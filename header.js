document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");

  if (!header) return;

  header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a href="index.html" class="site-logo">
          Open Mile
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="fashion.html">Fashion</a>
          <a href="food.html">Food</a>
          <a href="travel.html">Travel</a>
          <a href="nature.html">Nature</a>
          <a href="quotes.html">Quotes</a>
        </nav>

      </div>
    </header>
  `;

  const style = document.createElement("style");

  style.textContent = `
    .site-header {
      background: #ffffff;
      border-bottom: 1px solid #DCE7E8;
    }

    .header-inner {
      max-width: 1140px;
      min-height: 76px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .site-logo {
      color: #173B46;
      font-size: 21px;
      font-weight: 800;
      letter-spacing: -0.5px;
      white-space: nowrap;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .main-nav a {
      color: #617277;
      font-size: 12px;
      font-weight: 700;
      transition: color 0.2s ease;
    }

    .main-nav a:hover {
      color: #287786;
    }

    @media (max-width: 760px) {
      .header-inner {
        min-height: auto;
        padding: 18px 20px;
        flex-direction: column;
        gap: 14px;
      }

      .main-nav {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px 16px;
      }
    }
  `;

  document.head.appendChild(style);
});

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = "data:image/svg+xml," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#173B46"/>
    <text x="32" y="43" text-anchor="middle"
      font-family="Arial, sans-serif"
      font-size="34"
      font-weight="800"
      fill="#ffffff">O</text>
  </svg>
`);
document.head.appendChild(favicon);

