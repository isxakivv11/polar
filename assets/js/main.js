function changeTheme() {
    let html = document.querySelector('html');

    if (html.classList.contains("dark")) {
        html.classList.remove('dark');
        window.localStorage.removeItem('theme');
    } else {
        html.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
    }
}

window.onload = () => {
    let html = document.querySelector('html');

    if (window.localStorage.getItem('theme') == 'dark') {
        html.classList.add('dark');
    }
}
