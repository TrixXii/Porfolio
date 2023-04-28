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

window.addEventListener('scroll', function () {
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

button.addEventListener("mouseenter", function () {
    cross.classList.toggle("show");
    crossbg.classList.toggle("show");
    circles.forEach(element => {
        element.classList.toggle("show");
    });

});

button.addEventListener("mouseleave", function () {
    cross.classList.toggle("show");
    crossbg.classList.toggle("show");
    circles.forEach(element => {
        element.classList.toggle("show");
    });
});


const button2 = document.querySelector(".main-circle2");
const cross2 = document.querySelector(".cross2");

button2.addEventListener("mouseenter", function () {
    cross2.classList.toggle("show2");
    crossbg.classList.toggle("show2");
    circles.forEach(element => {
        element.classList.toggle("show2");
    });

});

button2.addEventListener("mouseleave", function () {
    cross2.classList.toggle("show2");
    crossbg.classList.toggle("show2");
    circles.forEach(element => {
        element.classList.toggle("show2");
    });
});

// Obtener todos los botones "Ver detalles"
const detailsBtns = document.querySelectorAll('.details-btn');

// Obtener la modal y su contenido
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('project-modal-title');
const modalDescription = document.getElementById('project-modal-description');

// Agregar un manejador de eventos de clic para cada botón "Ver detalles"
detailsBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Obtener el proyecto correspondiente
    const projectContainer = btn.parentElement;
    const projectTitle = projectContainer.querySelector('h3').textContent;
    const projectDescription = projectContainer.querySelector('p').textContent;

    // Actualizar la modal con la información del proyecto
    modalTitle.textContent = projectTitle;
    modalDescription.textContent = projectDescription;

    // Mostrar la modal
    modal.style.display = 'block';
  });
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