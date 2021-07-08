const bodyEl = document.querySelector('body');
const switcher = document.querySelector('.theme-switch__toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

switcher.addEventListener('change', changeTheme);


const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    switcher.checked = true;
};


function changeTheme() {
    const checked = switcher.checked;

    if (checked) {
        onThemeChange(Theme.DARK, Theme.LIGHT);
    } else {
        onThemeChange(Theme.LIGHT, Theme.DARK);
    }
};

function onThemeChange(addClass, delClass) {
    bodyEl.classList.remove(delClass);
    bodyEl.classList.add(addClass);
    localStorage.setItem('theme', addClass);
};