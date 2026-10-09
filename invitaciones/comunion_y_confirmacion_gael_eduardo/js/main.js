document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------------------------------------------------
    // 1. POPULATE TEMPLATE WITH CONFIG DATA
    // ----------------------------------------------------------------------
    
    // Document settings
    document.getElementById("meta-title").textContent = EVENT_CONFIG.metadata.title;
    document.getElementById("meta-description").setAttribute("content", EVENT_CONFIG.metadata.description);

    // Hero
    document.getElementById("hero-pre-title").innerHTML = EVENT_CONFIG.hero.preTitle;
    document.getElementById("hero-main-title").innerHTML = EVENT_CONFIG.hero.mainTitle;
    document.getElementById("hero-date").innerHTML = EVENT_CONFIG.hero.date;

    // Intro
    document.getElementById("intro-text").innerHTML = EVENT_CONFIG.intro.text;
    
    const familyContainer = document.getElementById("family-container");
    EVENT_CONFIG.intro.familyBlocks.forEach(block => {
        const div = document.createElement("div");
        div.className = "family-block";
        div.innerHTML = `<h3 class="block-title">${block.title}</h3><p>${block.names}</p>`;
        familyContainer.appendChild(div);
    });

    // Countdown details
    document.getElementById("countdown-display-date").innerHTML = EVENT_CONFIG.countdown.displayDate;
    document.getElementById("countdown-subtitle").innerHTML = EVENT_CONFIG.countdown.subtitle;

    // Locations
    const locationsContainer = document.getElementById("locations-container");
    EVENT_CONFIG.locations.forEach((loc, index) => {
        const aosDirection = index % 2 === 0 ? "fade-right" : "fade-left";
        const div = document.createElement("div");
        div.className = "location-card";
        div.setAttribute("data-aos", aosDirection);
        div.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${loc.image}" alt="${loc.title}" class="card-img">
            </div>
            <div class="card-content">
                <i class="fa-solid ${loc.icon} card-icon"></i>
                <h3 class="card-title">${loc.title}</h3>
                <p class="card-time">${loc.time}</p>
                <p class="card-desc">${loc.description}</p>
                <p class="card-address">${loc.address}</p>
                <a href="${loc.mapUrl}" target="_blank" class="btn btn-primary">${loc.buttonText}</a>
            </div>
        `;
        locationsContainer.appendChild(div);
    });

    // Itinerary
    document.getElementById("itinerary-title").innerHTML = EVENT_CONFIG.itinerary.title;
    const itineraryTimeline = document.getElementById("itinerary-timeline");
    EVENT_CONFIG.itinerary.events.forEach((ev, index) => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.setAttribute("data-aos", "fade-up");
        div.setAttribute("data-aos-delay", index * 100);
        div.innerHTML = `
            <div class="timeline-icon"><i class="fa-solid ${ev.icon}"></i></div>
            <div class="timeline-content">
                <h3>${ev.title}</h3>
                <p>${ev.time}</p>
            </div>
        `;
        itineraryTimeline.appendChild(div);
    });

    // RSVP
    document.getElementById("rsvp-title").innerHTML = EVENT_CONFIG.rsvp.title;
    document.getElementById("rsvp-text").innerHTML = EVENT_CONFIG.rsvp.text;
    document.getElementById("rsvp-btn-text").innerHTML = EVENT_CONFIG.rsvp.buttonText;
    document.getElementById("rsvp-btn").href = `https://api.whatsapp.com/send?phone=${EVENT_CONFIG.rsvp.whatsappNumber}&text=${encodeURIComponent(EVENT_CONFIG.rsvp.whatsappMessage)}`;

    // Footer
    document.getElementById("footer-copyright").innerHTML = EVENT_CONFIG.footer.copyright;
    document.getElementById("footer-credit").innerHTML = EVENT_CONFIG.footer.credit;
    document.getElementById("footer-btn-text").innerHTML = EVENT_CONFIG.footer.text;
    document.getElementById("footer-btn").href = `https://api.whatsapp.com/send?phone=${EVENT_CONFIG.rsvp.whatsappNumber}&text=${encodeURIComponent(EVENT_CONFIG.rsvp.whatsappMessage)}`;

    // ----------------------------------------------------------------------
    // 2. INITIALIZE LIBRARIES & LOGIC
    // ----------------------------------------------------------------------
    
    // Initialize AOS Animation library
    AOS.init({
        once: true,
        offset: 50,
        duration: 1000,
    });

    // Countdown Timer Logic
    const countDownDate = new Date(EVENT_CONFIG.countdown.targetDate).getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = EVENT_CONFIG.countdown.finishedText;
        }
    }, 1000);

    // funciones para la galeria de fotos
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        document.querySelector('.intro').scrollIntoView({
            behavior: 'smooth'
        });
    });

    let autoSlide = setInterval(nextSlide, 2000);

    function nextSlide(){
        currentIndex++;
        if(currentIndex >= gallery.images.length){
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
        clearInterval(autoSlide);
        nextSlide();
        autoSlide = setInterval(nextSlide, 2000);
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        clearInterval(autoSlide);
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = gallery.images.length - 1;
        }
        showImage(currentIndex);
        autoSlide = setInterval(nextSlide, 2000);
    });

    const slider = document.querySelector(".gallery-slider");

    slider.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    slider.addEventListener("mouseleave", () => {
        autoSlide = setInterval(nextSlide, 2000);
    });

    // FUNCIÓN PARA EL SELLO Y EL BOTON ABRIR
    const openBtn = document.getElementById("openInvitation");
    const welcomeScreen = document.getElementById("welcome-screen");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const music = document.getElementById("bgMusic");

    openBtn.addEventListener("click", () => {
        // ocultar sello
        openBtn.style.opacity = "0";
        // mostrar mensaje
        welcomeMessage.style.opacity = "1";
        // iniciar música
        music.play();
        // esperar medio segundo
        setTimeout(() => {
            welcomeScreen.style.transition = "opacity 1s";
            welcomeScreen.style.opacity = "0";
            setTimeout(() => {
                welcomeScreen.remove();
            }, 1000);
        }, 3000);
    });
});
