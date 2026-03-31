function mostrarImagen(ruta) {
    var archivoEmergente = document.getElementById("imagenEmergente");
    var archivoPreview = document.getElementById("imagenPreview");

    // Obtener la extensión del archivo
    var extension = ruta.split('.').pop().toLowerCase();

    // Determinar el tipo de contenido
    if (['png', 'jpg', 'jpeg', 'pdf'].includes(extension)) {
        // Si es una imagen, usar src para la imagen
        archivoPreview.src = ruta;
        archivoPreview.style.display = 'block';
    } else if (extension === 'pdf') {
        // Si es un PDF, usar object para renderizarlo
        archivoPreview.style.display = 'none';
        archivoEmergente.innerHTML = `<object data="${ruta}" type="application/pdf" width="300" height="400">
            <p>No se puede mostrar el PDF. <a href="${ruta}">Descargar PDF</a></p>
        </object>`;
    }

    // Mostrar el contenedor emergente
    archivoEmergente.style.display = "block";

    // Posicionar el contenedor emergente cerca del cursor
    document.onmousemove = function(event) {
        archivoEmergente.style.left = event.pageX + 10 + "px";
        archivoEmergente.style.top = event.pageY + 10 + "px";
    };
}

// Función para ocultar el archivo
function ocultarImagen() {
    var archivoEmergente = document.getElementById("imagenEmergente");

    // Ocultar el contenedor emergente
    archivoEmergente.style.display = "none";

    // Detener el seguimiento del cursor
    document.onmousemove = null;
}

const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target); // Solo una vez
      }
    });
  }, {
    threshold: 0.3 // Ajusta si quieres que se active antes o después
  });

  animatedElements.forEach(el => scrollObserver.observe(el));

const certificationCards = document.querySelectorAll('#certifications .flip-card');

certificationCards.forEach(card => {
  const frontTitle = card.querySelector('.flip-card-front h5');
  const backFace = card.querySelector('.flip-card-back');

  if (!frontTitle || !backFace) {
    return;
  }

  backFace.setAttribute('data-cert-title', frontTitle.textContent.trim());
});

const certificationColumns = document.querySelectorAll('#certifications .col');

certificationColumns.forEach(col => {
  if (col.hasAttribute('onclick')) {
    return;
  }

  col.addEventListener('click', () => {
    const cardInner = col.querySelector('.flip-card-inner');
    if (cardInner) {
      cardInner.classList.toggle('flipped');
    }
  });
});
