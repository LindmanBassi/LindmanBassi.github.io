const reveals = document.querySelectorAll('.reveal');
const toggle = document.getElementById('toggleTheme');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.30 });

reveals.forEach(section => observer.observe(section));

function setTheme(theme) {
    document.body.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
    swapIcons(theme);
}

function swapIcons(theme) {
    document.querySelectorAll('img').forEach(img => {
        if (!img.src.includes('/skills/')) return;

        if (theme === 'light') {
            img.src = img.src.replace('-Dark.svg', '-Light.svg');
        } else {
            img.src = img.src.replace('-Light.svg', '-Dark.svg');
        }
    });
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
toggle.checked = savedTheme === 'light';

toggle.addEventListener('change', () => {
    setTheme(toggle.checked ? 'light' : 'dark');
});
