document.getElementById('scroll').addEventListener('click', function () {
    const target = document.getElementById('tryby');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 500);
    }
});
document.getElementById('tryby_link').addEventListener('click', function () {
    const target = document.getElementById('tryby');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 500);
    }
});
document.getElementById('zarzad_link').addEventListener('click', function () {
    const target = document.getElementById('zarzad');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 500);
    }
});
document.getElementById('zarzad_link2').addEventListener('click', function () {
    const target = document.getElementById('zarzad');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 500);
    }
});
document.getElementById('main_link').addEventListener('click', function () {
    const target = document.getElementById('main');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 500);
    }
});

