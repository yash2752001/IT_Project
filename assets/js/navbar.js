document.addEventListener("DOMContentLoaded", function () {
    const navLinks = [
        { name: "Find a Quiz", href: "find-quiz.html" },
        { name: "Create", href: "create.html" },
        { name: "Help", href: "help.html" }
    ];
    
    const currentPage = window.location.pathname.split("/").pop();
    const navContainer = document.getElementById("nav-links");
    
    navContainer.innerHTML = navLinks
        .filter(link => link.href !== currentPage)
        .map(link => `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.name}</a></li>`) 
        .join("");
});
