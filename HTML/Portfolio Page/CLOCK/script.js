/*====================================================
        MODERN CLOCK DASHBOARD
                PART 4
====================================================*/

// =============================
// DOM ELEMENTS
// =============================

const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

const digitalTime = document.getElementById("digitalTime");
const fullDate = document.getElementById("fullDate");

const dayText = document.getElementById("dayText");
const monthText = document.getElementById("monthText");
const dateText = document.getElementById("dateText");

const temperature = document.getElementById("temperature");
const city = document.getElementById("city");

// =============================
// ARRAYS
// =============================

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// =============================
// UPDATE CLOCK
// =============================

function updateClock() {

    const now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    // Analog Rotation

    let secondDeg = seconds * 6;

    let minuteDeg = minutes * 6 + seconds * 0.1;

    let hourDeg = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;

    // Digital Time

    let hh = String(hours).padStart(2, "0");
    let mm = String(minutes).padStart(2, "0");
    let ss = String(seconds).padStart(2, "0");

    digitalTime.innerHTML = `${hh}:${mm}:${ss}`;

    // Date

    fullDate.innerHTML =
        `${days[now.getDay()]},
         ${months[now.getMonth()]}
         ${now.getDate()},
         ${now.getFullYear()}`;

    // Ring Text

    dayText.innerHTML = days[now.getDay()];

    monthText.innerHTML = months[now.getMonth()];

    dateText.innerHTML = now.getDate();
}

// =============================
// WEATHER (Demo)
// =============================

function loadWeather() {

    // Replace with API later

    temperature.innerHTML = "14°C";

    city.innerHTML = "Cloudy";

}

// =============================
// OPTIONAL RING ANIMATION
// =============================

function animateRings(){

    let secondRing =
        document.querySelector(".second-ring");

    let dayRing =
        document.querySelector(".day-ring");

    let monthRing =
        document.querySelector(".month-ring");

    let dateRing =
        document.querySelector(".date-ring");

    let angle = 0;

    setInterval(()=>{

        angle += 0.08;

        secondRing.style.transform =
            `rotate(${angle*4}deg)`;

        dayRing.style.transform =
            `rotate(${-angle/2}deg)`;

        monthRing.style.transform =
            `rotate(${angle/3}deg)`;

        dateRing.style.transform =
            `rotate(${-angle/5}deg)`;

    },20);

}

// =============================
// DIGITAL GLOW
// =============================

function glowEffect(){

    const clock =
        document.querySelector(".digital-clock h1");

    setInterval(()=>{

        clock.style.opacity=".8";

        setTimeout(()=>{

            clock.style.opacity="1";

        },500);

    },1000);

}

// =============================
// INITIALIZE
// =============================

updateClock();

loadWeather();

animateRings();

glowEffect();

setInterval(updateClock,1000);