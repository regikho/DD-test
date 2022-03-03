const up = document.querySelector('.up');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        up.style.display = 'block';
    } else {
        up.style.display = 'none';
    }
};
