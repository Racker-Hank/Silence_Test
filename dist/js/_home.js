let hp1 = document.getElementById('hp1');
let hp2 = document.getElementById('hp2');
let name = document.getElementById('name');

let showcase_h1 = document.querySelector('.showcase').querySelector('h1');

let hp1_top_default = hp1.offsetTop;
let hp2_left_default = hp2.offsetLeft;

window.addEventListener('scroll', function() {
    var value = this.window.scrollY;
    name.style.top = value + 'px';
    name.style.left = value * 0.5 + 'px';
    hp1.style.top = hp1_top_default + value * 0.5 + 'px';
    hp2.style.transform = 'rotate(' + (-90 + value * 0.15) + 'deg)';
    hp2.style.top = -22 * 16 + value + 'px';
    hp2.style.left = hp2_left_default - value * 0.25 + 'px';
    showcase_h1.style.transform = 'translateY(' + (40 - value * 0.04) + '%)';
    if (value > 300) {
        let header = document.getElementById('header');
        let logo = document.getElementById('logo');
        header.style.background = "#141414";
        logo.style.opacity = "1";
    }
    else {
        header.style.background = "none";
        logo.style.opacity = "0";
    }
})