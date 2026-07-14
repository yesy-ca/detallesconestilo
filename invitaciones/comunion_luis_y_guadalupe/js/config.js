const EVENT_CONFIG = {
    // Document Settings
    metadata: {
        title: "Mi Primera Comunión Luis y Guadalupe 01/08/26",
        description: "Invitación a nuestra Primera Comunión - Luis y Guadalupe. Acompáñanos este 01 de Agosto de 2026."
    },

    // Hero Section
    hero: {
        preTitle: "Mi Primera Comunión",
        mainTitle: "Luis y Guadalupe",
        date: "01 &bull; 08 &bull; 2026"
    },

    // Intro Section
    intro: {
        text: "Con el corazón lleno de amor y alegría, nos preparamos para recibir por primera vez el cuerpo y la sangre de Cristo. Es un momento maravilloso en nuestro camino de fe, y por ello, deseamos que nuestros seres queridos sean testigos de este compromiso espiritual. Agradecemos a Dios por sus bendiciones y nos llena de felicidad poder compartir este día tan sugnificativo con todos ustedes.",
        familyBlocks: [
            {
                title: "Mis Padres:",
                names: "Fernando Ordaz Perez<br>y<br>Graciela Molina Tapia"
            },
            {
                title: "Mis Padrinos:",
                names: "Manuel Vargas Concha<br>y<br>Ma. del Carmen Morales Hernández"
            }
        ]
    },

    // Countdown Section
    countdown: {
        targetDate: "Aug 01, 2026 10:00:00", // Format: "MMM D, YYYY HH:mm:ss"
        displayDate: "Sábado 01-AGOSTO-2026",
        subtitle: "Solo faltan",
        finishedText: "<h2>¡Hoy es el gran día!</h2>"
    },

    // Locations Section
    locations: [
        {
            id: "misa",
            title: "Misa",
            time: "13:30 hrs.",
            description: "Parroquia del Espíritu Santo",
            address: "Lomas de los Luceros S/N, Lomas Residencial Pachuca, Pachuca de Soto, Hgo,",
            mapUrl: "https://maps.app.goo.gl/ELSgGrnz6GwVP42L8",
            icon: "fa-church",
            image: "assets/img/church_photo.jpg",
            buttonText: "Ver Mapa"
        },
        {
            id: "recepcion",
            title: "Recepción",
            time: "14:00 hrs.",
            description: "Salón Los Portales",
            address: "Avenida Hidalgo número 61, Colonia Centro, Pachuquilla, Hgo",
            mapUrl: "https://maps.app.goo.gl/Nyp2bFkjtocgNnk48",
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
            { title: "Ceremonia", time: "10:00 hrs.", icon: "fa-ring" },
            { title: "Recepción", time: "14:00 hrs.", icon: "fa-champagne-glasses" },
            { title: "Comida", time: "15:00 hrs.", icon: "fa-utensils" },
            { title: "Pastel", time: "18:30 hrs.", icon: "fa-cake" },
            { title: "Piñatas", time: "19:00 hrs.", icon: "fa-star" },
            { title: "Baile", time: "19:30 hrs.", icon: "fa-music" }
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
        text: "Por favor, antes del 24 de Julio. ¡Te esperamos!",
        whatsappNumber: "+527712025433",
        whatsappMessage: "Confirmo mi asistencia. Mi nombre es:",
        buttonText: "Confirmar Asistencia"
    },

    // Footer
    footer: {
        copyright: "&copy; 2026 Mi Comunión Luis y Guadalupe. Todos los derechos reservados.",
        credit: "¿Te gustó esta invitación? ",
        text: "Escríbenos",
        whatsappNumber: "+527717480335",
        whatsappMessage: "Me gustaría una invitación digital:",
    }
};
