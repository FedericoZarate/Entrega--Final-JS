const contenedorTarjeta = document.getElementById("product-conteiner");
const unidadesTarjeta = document.getElementById("unidades");
const precioTarjeta = document.getElementById("precios");
const carritoVacioElement = document.getElementById("carritovacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarrito = document.getElementById("reiniar");
const comprar = document.getElementById("comprar");

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

function actualizarTotal() {
  const productos = JSON.parse(localStorage.getItem("elementos"));

  let unidades = 0;
  let precios = 0;

  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      unidades += producto.cantidad;
      precios += producto.precio * producto.cantidad;
    });
  }
  unidadesTarjeta.innerText = unidades;
  precioTarjeta.innerText = precios;
}
actualizarTotal();

reiniciarCarrito.addEventListener("click", reiniciarNumeroCarrito);
function reiniciarNumeroCarrito() {
  localStorage.removeItem("elementos");

  revisarMensajeVacio();
}

comprar.addEventListener("click", () => {
  Toastify({
    text: "Gracias por su compra",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #283618)",
    },

    onClick: function () {}, // Callback after click
  }).showToast();
  reiniciarNumeroCarrito();

  revisarMensajeVacio();
});

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
// function revisarMensajeVacio() {
//   const productos = JSON.parse(localStorage.getItem("elementos"));
//   carritoVacioElement.classList.toggle("fueradevista", productos);
//   totalesElement.classList.toggle("fueradevista", !productos);
// }
revisarMensajeVacio();
