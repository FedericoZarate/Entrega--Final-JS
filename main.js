//array de productos.
const productos = [
  // Bombilla de Alpaca
  {
    id: "bombilla-artesanal-01",
    titulos: "Bombilla Artesanal Doble Bomba",
    imagen: "./img/bombillas de alpaca/bombila artesanal doble bomba.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca-01",
    },
    precio: 2000,
  },
  {
    id: "bombilla-corazones-02",
    titulos: "Bombilla 3 Corazones",
    imagen: "./img/bombillas de alpaca/bombilla 3 corazones.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca-02",
    },
    precio: 2000,
  },
  {
    id: "bombilla-artesanal-chata-03",
    titulos: "Bombilla Artesanal Chata",
    imagen: "./img/bombillas de alpaca/bombilla artesanal chata.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca-03",
    },
    precio: 2000,
  },
  {
    id: "bombilla-artesanal-entrerriana-04",
    titulos: "Bombilla Artesanal Entrerriana",
    imagen: "./img/bombillas de alpaca/bombilla artesanal entrerriana.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca-04",
    },
    precio: 2000,
  },

  // Mate Imperial
  {
    id: "mate-imperial-cuero-crudo-01",
    titulos: "Mate Imp Cuero Crudo",
    imagen: "./img/mate-imperial/cuero crudo cinta abstracta.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-01",
    },
    precio: 4000,
  },
  {
    id: "mate-imperial-coroco-blanco02",
    titulos: "Mate Imp Croco Blanco",
    imagen: "./img/mate-imperial/imperial croco blanco.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-02",
    },
    precio: 4000,
  },
  {
    id: "mate-imperial-croco-negro-03",
    titulos: "Mate Imp Croco Negro",
    imagen: "./img/mate-imperial/imperial croco negro.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-03",
    },
    precio: 4000,
  },
  {
    id: "mate-imperial-pata-bolita-04",
    titulos: "Mate Imp Patas Bolita",
    imagen: "./img/mate-imperial/imperial patas bolitas.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-04",
    },
    precio: 4000,
  },

  // Termos

  {
    id: "termo-stanley-1.4lt-04",
    titulos: "Termo Stanley 1.4lt Tapon Cebador",
    imagen: "./img/termos/termo stanley 1.4lt tapon cebador.webp",
    categoria: {
      nombre: "Termo",
      id: "stanley-1.4lt-01",
    },
    precio: 10000,
  },
  {
    id: "termo-stanley-clasico-05",
    titulos: "Termo Stanley 950ml Clasico",
    imagen: "./img/termos/termo stanley 950ml clasico.webp",
    categoria: {
      nombre: "Termo",
      id: "stanley-clasico-02",
    },
    precio: 10000,
  },
];

const contendorProductos = document.querySelector("#products-container");
let botonesAgregar = document.querySelectorAll(".product-add");

function cargarProducto() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img class="product-img" src="${producto.imagen}" alt="${producto.titulos}">
      <div class="product-change">  
        <h5 class="product-title">${producto.titulos}</h5>
        <p class="product-price">$${producto.precio}</p>
        <button  class="product-add" id= "${producto.id}">Agregar</button>
      </div>  
      `;

    contendorProductos.append(div);
  });

  actualizarBotonesAgregar();
}
cargarProducto();

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".product-add");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarCarrito);
  });
}

const productosCarrito = [];

function agregarCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productAdd = productos.find((producto) => producto.id === idBoton);

  productosCarrito.push(productAdd);
  console.log(productosCarrito);
}
