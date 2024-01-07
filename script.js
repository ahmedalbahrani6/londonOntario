window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('small-header');
        header.classList.remove('big-header');
    } else {
        header.classList.add('big-header');
        header.classList.remove('small-header');
    }
});
