const contenedorTarjeta = document.getElementById("product-conteiner");
const unidadesTarjeta = document.getElementById("unidades");
const precioTarjeta = document.getElementById("precios");
const carritoVacioElement = document.getElementById("carritovacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarrito = document.getElementById("reiniar");

function crearProductosInicio() {
  contenedorTarjeta.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("elementos"));

  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
            <img src="${producto.imagen}">
            <h3>${producto.titulos}</h3>
            <p>$${producto.precio}</p>
            <div>
                <button>-</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button>+</button>
            </div>
        `;
      contenedorTarjeta.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          agregarAlCarrito(producto);
          crearProductosInicio();
          actualizarTotal();
        });
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          restarAlCarrito(producto);
          crearProductosInicio();
          actualizarTotal();
        });
    });
  }
}
crearProductosInicio();

actualizarTotal();
function actualizarTotal() {
  const productos = JSON.parse(localStorage.getItem("elementos"));

  let unidades = 0;
  let precios = 0;

  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidades += producto.cantidad;
      precios += producto.precio * producto.cantidad;
    });
    unidadesTarjeta.innerText = unidades;
    precioTarjeta.innerText = precios;
  }
  revisarMensajeVacio();
}

function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("elementos"));
  carritoVacioElement.classList.toggle(
    "fueradevista",
    productos && productos.length > 0
  );
  totalesElement.classList.toggle(
    "fueradevista",
    !(productos && productos.length > 0)
  );
}
revisarMensajeVacio();

reiniciarCarrito.addEventListener("click", reiniciarNumeroCarrito);
function reiniciarNumeroCarrito() {
  localStorage.removeItem("elementos");
  actualizarTotal();
}
revisarMensajeVacio();
