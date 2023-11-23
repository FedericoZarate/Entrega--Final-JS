const contenedorTarjeta = document.getElementById("product-conteiner");

fetch("./productos.json")
  .then((Response) => Response.json())
  .then((data) => {
    crearProductosInicio(data);
  });

function crearProductosInicio(productos) {
  productos.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto";
    nuevoProducto.innerHTML = `
        <img src="${producto.imagen}">
        <h3>${producto.titulos}</h3>
        <p>$${producto.precio}</p>
        <button id="btn">Agregar</button>
    `;
    contenedorTarjeta.appendChild(nuevoProducto);
    nuevoProducto
      .getElementsByTagName("button")[0]
      .addEventListener("click", () => agregarAlCarrito(producto));
  });
}
