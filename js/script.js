const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});


const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});

const button = document.querySelector(".main-circle");
const circles = document.querySelectorAll(".circles");
const cross = document.querySelector(".cross");
const crossbg = document.querySelector(".bg");

button.addEventListener("mouseenter", function() {
    cross.classList.toggle("show");
    crossbg.classList.toggle("show");
    circles.forEach(element => {
        element.classList.toggle("show");
    });

});

button.addEventListener("mouseleave", function() {
    cross.classList.toggle("show");
    crossbg.classList.toggle("show");
    circles.forEach(element => {
        element.classList.toggle("show");
    });
});

const button2 = document.querySelector(".main-circle2");
const cross2 = document.querySelector(".cross2");

button2.addEventListener("mouseenter", function() {
    cross2.classList.toggle("show2");
    crossbg.classList.toggle("show2");
    circles.forEach(element => {
        element.classList.toggle("show2");
    });

});

button2.addEventListener("mouseleave", function() {
    cross2.classList.toggle("show2");
    crossbg.classList.toggle("show2");
    circles.forEach(element => {
        element.classList.toggle("show2");
    });
});

// Obtener todos los botones "Ver detalles"

// Obtener la modal y su contenido
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('project-modal-title');
const modalDescription = document.getElementById('project-modal-description');
const modalImg = document.getElementById('project-modal-img');
const modalPrevBtn = document.getElementById('project-modal-prev');
const modalNextBtn = document.getElementById('project-modal-next');

let currentProject = 0;
const projects = [{
        title: 'Proyecto 1',
        description: 'Descripción breve del proyecto 1.',
        imgSrc: './img/2023-03-03 16-32-06.gif'
    },
    {
        title: 'Eventos',
        description: 'Plantilla de diseño',
        allDesc: `En este proyecto cree una plantilla para un evento de una empresa llamada Meetmaps
         en la que me encontraba de practicas, en donde muestro información sobre el evento, en donde se celebrara, 
         una agenda de las actividades y informacion sobre los ponentes`,
        imgSrc: './img/2023-03-03 16-28-50.gif'
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción breve del proyecto 3.',
        allDesc: 'Plantilla de diseño',
        imgSrc: './img/2023-03-03 16-25-31.gif'
    },
    {
        title: 'Proyecto 4',
        description: 'Descripción breve del proyecto 4.',
        allDesc: 'Plantilla de diseño',
        imgSrc: './img/2023-03-03 16-39-35.gif'
    }
];

function generateProjects() {
    const allProjects = document.getElementById('allprojects');
    projects.forEach(project => {
        allProjects.innerHTML += `
            <div class="project">
                <img src="${project.imgSrc}" alt="${project.title}">
                <h3>${project.title}</h3>
                <div class=" text-body-secondary">
                ${project.description}
                </div>
                <button class="details-btn">Ver detalles</button>
            </div>
        `;
    });

    function updateProjectInfo() {
        modalTitle.textContent = projects[currentProject].title;
        modalDescription.textContent = projects[currentProject].allDesc;
        modalImg.src = projects[currentProject].imgSrc;
    }

    // Agregar un manejador de eventos de clic para cada botón "Ver detalles"
    const detailsBtns = document.querySelectorAll('.details-btn');

    detailsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            debugger
            // Obtener el proyecto correspondiente
            const projectContainer = btn.parentElement;
            currentProject = [...projectContainer.parentElement.children].indexOf(projectContainer);
            updateProjectInfo();
            // Mostrar la modal
            modal.style.display = 'block';
        });
    });

    modalPrevBtn.addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProjectInfo();
    });

    modalNextBtn.addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProjectInfo();
    });

    // Agregar un manejador de eventos de clic para el botón de cerrar la modal
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar la modal si el usuario hace clic fuera de ella
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

}
generateProjects();