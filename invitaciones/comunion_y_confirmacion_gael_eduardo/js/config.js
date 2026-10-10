const EVENT_CONFIG = {
    // Document Settings
    metadata: {
        title: "Mi Primera Comunión Luis y Guadalupe 01/08/26",
        description: "Invitación a nuestra Primera Comunión - Luis y Guadalupe. Acompáñanos este 01 de Agosto de 2026."
    },

    // Hero Section
    hero: {
        preTitle: "Mi Primera Comunión y Confirmación",
        mainTitle: "Gael Eduardo",
        date: "28 &bull; 11 &bull; 2026"
    },

    // Intro Section
    intro: {
        text: "Con el corazón lleno de amor y alegría, me preparo para recibir por primera vez el cuerpo y la sangre de Cristo. Es un momento maravilloso en mi camino de fe, y por ello, mi familia y yo deseamos que nuestros seres queridos sean testigos de este compromiso espiritual. Agradecemos a Dios por sus bendiciones y nos llena de felicidad poder compartir este día tan significativo con todos ustedes.",
        familyBlocks: [
            {
                title: "Mis Padres:",
                names: "Carolina Garcia Aguirre<br>y<br>Erick Eduardo Vazquez Marin"
            },
            {
                title: "Mi Padrino:",
                names: "José Daniel Garcia Aguirre"
            }
        ]
    },

    // Countdown Section
    countdown: {
        targetDate: "Nov 28, 2026 14:00:00", // Format: "MMM D, YYYY HH:mm:ss"
        displayDate: "Sábado 28-NOVIEMBRE-2026",
        subtitle: "Solo faltan",
        finishedText: "<h2>¡Hoy es el gran día!</h2>"
    },

    // Locations Section
    locations: [
        {
            id: "misa",
            title: "Misa",
            time: "14:00 hrs.",
            description: "Parroquia de la Divina Providencia",
            address: "Av. Santa Cecilia No. 93, La Providencia, Mineral de la Reforma, Hidalgo",
            mapUrl: "https://maps.app.goo.gl/s32aA1TaWSacuCMU7",
            icon: "fa-church",
            image: "assets/img/church_photo.jpg",
            buttonText: "Ver Mapa"
        },
        {
            id: "recepcion",
            title: "Recepción",
            time: "15:30 hrs.",
            description: "Hacienda La Providencia",
            address: "Av. Santa Cecilia S/N, La Providencia, Mineral de la Reforma, Hidalgo",
            mapUrl: "https://maps.app.goo.gl/89uzEvkoBj896duV8",
            icon: "fa-glass-cheers",
            image: "assets/img/reception_photo.png",
            buttonText: "Ver Mapa"
        }
    ],

    // Dress Code Section
    dressCode: {
        title: "Código de Vestimenta",
        text: "Formal o vaquero",
        alertText: "El color Rojo está reservado para la quinceañera."
    },

    // Itinerary Section
    itinerary: {
        title: "– Itinerario –",
        events: [
            { title: "Ceremonia", time: "14:00 hrs.", icon: "fa-church" },
            { title: "Recepción", time: "15:30 hrs.", icon: "fa-champagne-glasses" },
            { title: "Comida", time: "16:00 hrs.", icon: "fa-utensils" },
            { title: "Trío romántico", time: "16:00 hrs.", icon: "fa-heart" },
            { title: "Mariachi", time: "16:30 hrs.", icon: "fa-guitar" },
            { title: "Payaso", time: "18:00 hrs.", icon: "fa-regular fa-face-grin-tongue-wink" },
            { title: "Piñatas", time: "19:00 hrs.", icon: "fa-gift" },
            { title: "Pastel", time: "19:30 hrs.", icon: "fa-cake" },
            { title: "Baile", time: "20:00 hrs.", icon: "fa-child-reaching" }
        ]
    },

    // Gifts Section
    gifts: {
        title: "¡Lluvia de Sobres!",
        text: "Tu presencia es mi mejor regalo, pero si quieres tener un detalle conmigo habrá Lluvia de Sobres."
    },

    // Messages / Wish Box
    messages: {
        title: "– Buzón de deseos –",
        text: "¿Quieres dedicarme unas palabras? Puedes dejarme un mensaje aquí...",
        whatsappNumber: "+527714044834",
        whatsappMessage: "Deja un bonito mensaje aqui...",
        buttonText: "Dejar Mensaje"
    },

    // RSVP Section
    rsvp: {
        title: "¡Confirma tu Asistencia!",
        text: "¡Te esperamos!",
        whatsappNumber: "+527716875244",
        whatsappMessage: "Confirmo mi asistencia. Mi nombre es:",
        buttonText: "Confirmar Asistencia"
    },

    // Footer
    footer: {
        copyright: "&copy; 2026 Mi Comunión y Confirmación Gael Eduardo. Todos los derechos reservados.",
        credit: "¿Te gustó esta invitación? ",
        text: "Escríbenos",
        whatsappNumber: "+527717480335",
        whatsappMessage: "Me gustaría una invitación digital:",
    }
};
