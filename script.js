// Open responsive sidebar
function navIcon() {
    var navbar = document.querySelector('nav');


    navbar.classList.toggle('responsive');
    document.getElementsByClassName("nav-links")[0].style.top = navbar.offsetHeight + 'px';
}


// Image carousel
let imgwdsIndex = 0;
const imgwds = document.querySelectorAll('#imageCarousel .imgwds');
const totalImgwds = imgwds.length;

function showImgwds(index) {
    imgwds.forEach(imgwds => imgwds.style.display = 'none'); // Hide all imgwds
    imgwds[index].style.display = 'block'; // Show the selected imgwds
}

function nextImgwds() {
    imgwdsIndex = (imgwdsIndex + 1) % totalImgwds;
    showImgwds(imgwdsIndex);
}

// Show the first imgwds initially
showImgwds(imgwdsIndex);

// Change imgwds every 3 seconds
setInterval(nextImgwds, 3000);



// While scrolling, navbar shows up
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var navbar = document.querySelector('nav');

    if (window.scrollY + 100 > header.offsetHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});



// WhatsApp chat
function openChat() {
    // Change 'yourPhoneNumber' to your actual WhatsApp number
    window.open('https://wa.me/yourPhoneNumber', '_blank');
}

// SMS message
function getMobileOperatingSystem() {
    // Credit: Ryan kulp @ https://www.quora.com/Has-anyone-successfully-preset-body-copy-within-a-tap-to-SMS-link/answer/Ryan-Kulp
    var userAgent = navigator.userAgent || navigator.userAgentData.platform || window.opera;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
        return 'iOS';
    }

    else if (userAgent.match(/Android/i)) {
        return 'Android';
    }

    else { return 'non-mobile or unknown'; }
}

var deviceType = getMobileOperatingSystem();
console.log(deviceType);



// FAQ section
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.lastChild.classList.toggle("rotate-icon");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        }
        else {
            panel.style.display = 'block';
        }
    })
}