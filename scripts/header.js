function headerContent(currentPage) {
    const inIndex = location.href.includes("index") || location.href[location.href.length - 1] == '/';
    document.querySelector("header").innerHTML = `
    <header id="header">
      <h1>
      <a href="${inIndex ? '' : "../"}index.html">Han's Labs</a>
      </h1>
       <nav class="nav">
          <button class="toggle-menu">
            <span>MENU</span>
          </button>
       </nav>

<div id="menu" class="">
       <nav class="main-nav">
                <ul>
                <li><a
                    href="${inIndex ? "../" : ''}projects.html"
                    class="${currentPage == "projects" ? "current" : ''}">
                    projects
                </a></li>
                <li><a
                    href="${inIndex ? "../" : ''}services.html"
                    class="${currentPage == "services" ? "current" : ''}">
                    services
                </a></li>
                <li><a
                    href="${inIndex ? "../" : ''}contacts.html"
                    class="${currentPage == "contacts" ? "current" : ''}">
                    contacts
                </a></li>
                </ul>
       </nav>
       <nav class="social-links">
                 <a href="#" class="social-icon">behance</a>
                 <a href="#" class="social-icon">YouTube</a>
       </nav>
       </div>
    </header>
        `;
}

