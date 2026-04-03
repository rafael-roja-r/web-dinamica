document.addEventListener("DOMContentLoaded", () => {
    loadPage('home');
});

function loadPage(page) {
    fetch(`../pages/${page}.html`)
        .then(response => response.text())
        .then(data => document.getElementById("content").innerHTML = data);
}