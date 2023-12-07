// JSON con varios elementos de contacto
const contactos = [
    { nombre: "Nombre 1", imagen: "img/user.png", calificacion: "⭐⭐⭐" },
    { nombre: "Nombre 2", imagen: "img/user.png", calificacion: "⭐⭐" },
    { nombre: "Nombre 3", imagen: "img/user.png", calificacion: "⭐⭐⭐⭐" }
  ];
  
  // Obtén la referencia a la lista de contactos
  let listaContactos = document.querySelector(".lista-contactos");
  
  // Itera sobre los elementos del JSON y agrégales a la lista
  contactos.forEach(contacto => {
    // Crea un nuevo elemento li con el contenido de cada contacto
    let nuevoContacto = document.createElement("li");
    nuevoContacto.className = "contacto-item";
    nuevoContacto.innerHTML = `
      <img src="${contacto.imagen}" alt="${contacto.nombre}" class="profile-img">
      <p class="profile-name">${contacto.nombre}</p>
      <span>${contacto.calificacion}</span>
    `;
  
    // Agrega el nuevo elemento a la lista de contactos
    listaContactos.appendChild(nuevoContacto);
  });
  