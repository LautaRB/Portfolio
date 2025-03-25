const born = new Date("July 30, 2001 00:00:00"); //fecha de nacimiento
const now = new Date(); //Fecha actual
const mounth = now.getMonth(); //Mes actual
const day = now.getDate(); //Dia actual
const hour = now.getHours(); //Hora actual
const monthDiff = now.getMonth() - born.getMonth(); //Diferencia en meses
let Bday: boolean = false; //Indica si es cumpleaños
let edad: number;

if (
  mounth === born.getMonth() &&
  day === born.getDate() &&
  hour === born.getHours()
) {
  Bday = true;
}

if (monthDiff > 0 || Bday) {
  edad = now.getFullYear() - born.getFullYear();
} else {
  edad = now.getFullYear() - born.getFullYear() - 1;
}

const data = {
    aboutMe: [
        "¡Hola! Me llamo Lautaro Rodriguez Brown, tengo " + edad + " años y soy desarrollador de software residente en la Ciudad Autónoma de Buenos Aires, Argentina.",
        "Me apasiona aprender nuevas tecnologías y afrontar desafíos que impulsen mi crecimiento profesional. Me especializo en lenguajes como C, Java, Javascript, Python, entre otros. Me destaco por ser una persona organizada, puntual, responsable y comprometida. Trabajo de manera eficiente en equipo, adaptándome rápidamente a nuevos paradigmas y enfoques. Mi objetivo es contribuir a proyectos innovadores, ofreciendo soluciones creativas y efectivas.",
        "Fuera de la programación, me gusta complementar mis conocimientos con otras áreas de la informática, como lo es el mantenimiento y reparación de computadoras. En lo personal, soy una persona que disfruta practicar deportes, pasar tiempo con amigos y relajarme con actividades como ver series o películas."
    ],
    formacion: {
        secundaria: {
            titulo: "Bachiller con orientación en informática",
            institucion: "Ceferino Namuncurá",
            fechaInicio: "2014",
            fechaFin: "2019",
            lugar: "Ciudad Autónoma de Buenos Aires",
        },
        facultad: {
            titulo: "Técnico superior en informática aplicada",
            institucion: "Profesorado técnico de la universidad tecnológica nacional (INSPT-UTN)",
            fechaInicio: "2022",
            fechaFin: "Presente",
            lugar: "Ciudad Autónoma de Buenos Aires",
        },
        experienciaLaboral: {
            puesto: "Pasante en soporte técnico",
            empresa: "Profesorado técnico de la universidad tecnológica nacional (INSPT-UTN)",
            fechaInicio: "2023",
            fechaFin: "Presente",
            lugar: "Ciudad Autónoma de Buenos Aires",
        }
    },
    links: {
        gmail: "mailto:lautanba@gmail.com",
        linkedin: "https://www.linkedin.com/in/lautaro-rodriguez-brown-7294b9257/",
        github: "https://github.com/LautaRB"
    }
};

export const info = data;