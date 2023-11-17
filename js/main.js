const contendorProductos = document.getElementById("product-conteiner");

function cargarProducto(elementos) {
  elementos.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "new-product";
    nuevoProducto.innerHTML = `
      <img src=" ${producto.imagen}">
      <h3>${producto.titulos}</h3>
      <p>$${producto.precio}</p>
      <button>Añadir</button>
    `;
    contendorProductos.appendChild(nuevoProducto);
    nuevoProducto
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(producto));
  });
}
cargarProducto(elementos);
