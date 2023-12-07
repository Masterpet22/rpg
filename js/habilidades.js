// JSON con varios elementos
const habilidades = [
    { nombre: "Habilidad 1", rango: 50 },
    { nombre: "Habilidad 2", rango: 30 },
    { nombre: "Habilidad 3", rango: 70 }
  ];
  
  // Obtén la referencia a la lista
  let list = document.querySelector(".skill-list");
  
  // Itera sobre los elementos del JSON y agrégales a la lista
  habilidades.forEach(habilidad => {
    // Crea un nuevo elemento li con el contenido de cada habilidad
    let nuevoElemento = document.createElement("li");
    nuevoElemento.className = "skill-item";
    nuevoElemento.innerHTML = `
      <label for="habilidad">${habilidad.nombre}</label>
      <input type="range" class="habilidad-rango" value="${habilidad.rango}">
    `;
  
    // Agrega el nuevo elemento a la lista
    list.appendChild(nuevoElemento);
  });
  