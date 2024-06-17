// Open responsive sidebar
// function navIcon() {
//     var navbar = document.querySelector('nav');
//     navbar.classList.toggle('responsive');

//     var height = navbar.offsetHeight + 0.5;
//     document.getElementsByClassName("nav-links")[0].style.top = height + 'px';
// }

function navIcon() {
    var navbar = document.querySelector('nav');
    var navLinks = document.querySelector('.nav-links');

    navLinks.classList.toggle('responsive');

    var height = navbar.offsetHeight;
    if (navLinks.classList.contains('responsive')) {
        navLinks.style.top = height + 'px';
    } else {
        navLinks.style.top = 'initial';
    }
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
    window.open('https://wa.me/yourPhoneNumber', '_blank');
}

// SMS message
function getMobileOperatingSystem() {
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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const formEndpoint = 'https://formspree.io/f/xeqybydd';

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        try {
            // Send form data using Fetch API
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            });

            if (response.ok) {
                formStatus.textContent = 'Thank you for your message. We will get back to you soon!';
                formStatus.style.color = 'green';
                form.reset();
            } else {
                formStatus.textContent = 'Oops! There was a problem submitting your form. Please try again.';
                formStatus.style.color = 'red';
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem submitting your form. Please try again.';
            formStatus.style.color = 'red';
        }
    });

    // Initialize maps
    var map1 = L.map('mapContainer1').setView([40.7128, -74.0060], 10); // New York City
    var map2 = L.map('mapContainer2').setView([41.1220, -73.7949], 10); // Westchester
    var map3 = L.map('mapContainer3').setView([41.6032, -73.0877], 10); // Connecticut

    // Add tile layers to the maps
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map3);

    // Optional: Add markers for each location
    var nyMarker = L.marker([40.7128, -74.0060]).addTo(map1).bindPopup('New York, NY');
    var westchesterMarker = L.marker([41.1220, -73.7949]).addTo(map2).bindPopup('Westchester, NY');
    var connecticutMarker = L.marker([41.6032, -73.0877]).addTo(map3).bindPopup('Connecticut');

});

