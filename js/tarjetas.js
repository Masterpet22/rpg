// Usa la función fetch para cargar el contenido de "bd.js" de forma asíncrona
fetch('./bd.json')
  .then(response => response.json()) // Suponiendo que "bd.js" contiene un objeto JSON
  .then(data => {
    // Obtén la referencia al contenedor de tarjetas
    let contenedorTarjetas = document.querySelector(".activas");

    // Itera sobre los elementos del JSON y agrégales a la lista
    data.tarjetas.forEach(tarjeta => {
      // Crea un nuevo elemento div con el contenido de cada tarjeta
      let nuevaTarjeta = document.createElement("div");
      nuevaTarjeta.className = "card";
      nuevaTarjeta.innerHTML = `
        <img src="${tarjeta.imagen}" alt="${tarjeta.descripcionImagen}">
        <div class="card-content">
          <h2 class="card-title">${tarjeta.titulo}</h2>
          <p class="card-description">${tarjeta.descripcion}</p>
          <span>${tarjeta.calificacion}</span>
        </div>
      `;

      // Agrega la nueva tarjeta al contenedor de tarjetas
      contenedorTarjetas.appendChild(nuevaTarjeta);
    });
  })
  .catch(error => console.error('Error al cargar el archivo bd.js:', error));
