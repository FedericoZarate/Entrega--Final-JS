//array de productos.
const productos = [
  // Bombilla Acero inoxidable
  {
    id: "bombilla-microfono-01",
    titulos: "Bombilla Microfono",
    imagen: "./img/bombillas/bombillas acero inoxidable/bombilla microfono.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Inoxidable",
    },
    precio: 1500,
  },
  {
    id: "bombilla-resorte-02 ",
    titulos: "Bombilla Resorte Pico de Loro",
    imagen:
      "./img/bombillas/bombillas acero inoxidable/bombillon resorte pico loro.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Inoxidable",
    },
    precio: 1500,
  },
  {
    id: "bombilla-chata con aro-03 ",
    titulos: "Bombilla Chata con Aro de Bronce",
    imagen:
      "./img/bombillas/bombillas acero inoxidable/chata con aro de bronde.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Inoxidable",
    },
    precio: 1500,
  },
  {
    id: "bombilla-chata-04 ",
    titulos: "Bombilla Chata",
    imagen: "./img/bombillas/bombillas acero inoxidable/chata.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Inoxidable",
    },
    precio: 1500,
  },

  // Bombilla de Alpaca
  {
    id: "bombilla-artesanal-01",
    titulos: "Bombilla Artesanal Doble Bomba",
    imagen:
      ".img/bombillas/bombillas de alpaca/bombilla artesanal doble bomba.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca",
    },
    precio: 2000,
  },
  {
    id: "bombilla-corazones-02",
    titulos: "Bombilla 3 Corazones",
    imagen: ".img/bombillas/bombillas de alpaca/bombilla 3 corazones.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca",
    },
    precio: 2000,
  },
  {
    id: "bombilla-artesanal-chata-03",
    titulos: "Bombilla Artesanal Chata",
    imagen: ".img/bombillas/bombillas de alpaca/bombilla artesanal chata.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca",
    },
    precio: 2000,
  },
  {
    id: "bombilla-artesanal-entrerriana-04",
    titulos: "Bombilla Artesanal Entrerriana",
    imagen:
      ".img/bombillas/bombillas de alpaca/bombilla artesanal entrerriana.jpg",
    categoria: {
      nombre: "Bombillas",
      id: "Alpaca",
    },
    precio: 2000,
  },

  // Mate Camionero
  {
    id: "mate-camionero-01",
    titulos: "Mate Camionero 4 Costuras",
    imagen: ".img/mate-camionero/camionero 4 costuras.jpg",
    categoria: {
      nombre: "Mate",
      id: "camionero-01",
    },
    precio: 5000,
  },
  {
    id: "mate-camionero-blanco-02",
    titulos: "Mate Camionero Blanco",
    imagen: ".img/mate-camionero/camionero blanco.jpg",
    categoria: {
      nombre: "Mate",
      id: "camionero-02",
    },
    precio: 5000,
  },
  {
    id: "mate-camionero-virola-03",
    titulos: "Mate Camionero con Virola ",
    imagen: ".img/mate-camionero/camionero con virola.jpg",
    categoria: {
      nombre: "Mate",
      id: "camionero-03",
    },
    precio: 5000,
  },
  {
    id: "mate-camionero-bufalo-04",
    titulos: "Mate Camionero Bufalo",
    imagen: ".img/mate-camionero/camionero bufalo.jpg",
    categoria: {
      nombre: "Mate",
      id: "camionero-04",
    },
    precio: 5000,
  },

  // Mate Imperial
  {
    id: "mate-imperial-cuero-crudo-01",
    titulos: "Mate Imp Cuero Crudo",
    imagen: ".img/mate-imperial/cuero crudo cinta abstracta.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-01",
    },
    precio: 4000,
  },
  {
    id: "mate-imperial-coroco-blanco02",
    titulos: "Mate Imp Croco Blanco",
    imagen: ".img/mate-imperial/imperial croco blanco.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-02",
    },
    precio: 4000,
  },
  {
    id: "mate-imperial-croco-negro-03",
    titulos: "Mate Imp Croco Negro",
    imagen: ".img/mate-imperial/imperial croco negro.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-03",
    },
    precio: 4000,
  },
  {
    id: "mate-imperial-pata-bolita-04",
    titulos: "Mate Imp Patas Bolita",
    imagen: ".img/mate-imperial/imperial patas bolitas.jpg",
    categoria: {
      nombre: "Mate",
      id: "imperial-04",
    },
    precio: 4000,
  },

  // Mate Torpeddo
  {
    id: "mate-torpedo-blanco-01",
    titulos: "Mate Torpedo Blanco Acero",
    imagen: "./img/mate-torpedo/torpedo blanco acero cincelado.jpg",
    categoria: {
      nombre: "Mate",
      id: "torpedo-01",
    },
    precio: 3000,
  },
  {
    id: "mate-torpedo-clasico-crudo-02",
    titulos: "Mate Torpedo Clasico Crudo",
    imagen: "./img/mate-torpedo/torpedo clasico crudo alpaca.jpg",
    categoria: {
      nombre: "Mate",
      id: "torpedo-02",
    },
    precio: 3000,
  },
  {
    id: "mate-torpedo-clasico-negro-03",
    titulos: "Mate Torpedo Clasico Negro",
    imagen: "./img/mate-torpedo/torpedo clasico negro alpaca.jpg",
    categoria: {
      nombre: "Mate",
      id: "torpedo-03",
    },
    precio: 3000,
  },
  {
    id: "mate-torpedo-negro-acero-04",
    titulos: "Mate Torpedo Negro Acero",
    imagen: "./img/mate-torpedo/torpedo negro acero cincelado.jpg",
    categoria: {
      nombre: "Mate",
      id: "torpedo-04",
    },
    precio: 3000,
  },

  // Termos
  {
    id: "termo-lumilagro-animalprint-01",
    titulos: "Termo acero Lumilagro Animal Print",
    imagen: ".img/termos/termo de acero lumilagro animal print.wenp",
    categoria: {
      nombre: "Termo",
      id: "lumilagro-01",
    },
    precio: 10000,
  },
  {
    id: "termo-lumilagro-blanco-02",
    titulos: "Termo acero Lumilagro Blanco",
    imagen: ".img/termos/termo de acero lumilagro blanco.wenp",
    categoria: {
      nombre: "Termo",
      id: "lumilagro-02",
    },
    precio: 10000,
  },
  {
    id: "termo-lumilagro-negro-03",
    titulos: "Termo acero Lumilagro Negro",
    imagen: ".img/termos/termo de acero lumilagro negro.wenp",
    categoria: {
      nombre: "Termo",
      id: "lumilagro-03",
    },
    precio: 10000,
  },
  {
    id: "termo-stanley-1.4lt-04",
    titulos: "Termo Stanley 1.4lt Tapon Cebador",
    imagen: ".img/termos/termo sntaley 1.4lt tapon cebador.wenp",
    categoria: {
      nombre: "Termo",
      id: "lumilagro-04",
    },
    precio: 10000,
  },
  {
    id: "termo-stanley-clasico-05",
    titulos: "Termo Stanley 950ml Clasico",
    imagen: ".img/termos/termo sntaley 950ml clasico.wenp",
    categoria: {
      nombre: "Termo",
      id: "lumilagro-05",
    },
    precio: 10000,
  },
];

console.table(productos);

// la funcion, al elegir la opcion 2, busca los productos y los agrega al carrito.
function buscarProducto(titulos) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].titulos.toLowerCase() === titulos.toLowerCase()) {
      return productos[i];
    }
  }
  return null;
}

//carrito y total en cero.
let carrito = [];
let total = 0;

//ciclo del e-commerce
while (true) {
  let opcion = prompt(
    "Bienvenido a ProductoMates🧉.!! \n¿En que le podemos ayudar?\n1. Ver productos.\n2. Agregar Productos.\n3. Vaciar carrito.\n4. Finalizar compra.\n5. Salir."
  );

  //condicionales....

  //opcion 1, busca en el array productos y lo muestra con el nombre y precio.
  if (opcion === "1") {
    let productosDisponibles = "Productos:\n";
    for (let i = 0; i < productos.length; i++) {
      productosDisponibles +=
        productos[i].titulos + ": " + productos[i].precio + " ARS\n";
    }
    alert(productosDisponibles);

    //opcion 2, pide el producto que queres llevar.

    // si el producto existe, seleccionas la cantidad que queres, se guarda en la variable carrito que se suma el producto + el precio y hace el calculo del subtotal
  } else if (opcion === "2") {
    let nombreProducto = prompt("Ingrese el producto que desea llevar:");
    let producto = buscarProducto(nombreProducto);
    if (producto === null) {
      alert("Lo sentimos, no tenemos ese producto en stock o no existe.");
    } else {
      let cantidad = prompt("¿Cuantos desea?:");
      let subtotal = producto.precio * cantidad;
      carrito.push({
        producto: producto,
        cantidad: cantidad,
        subtotal: subtotal,
      });
      total += subtotal;
      alert("Producto agregado al carrito con éxito.");
    }

    //opcion 3 te pregunta por seguridad si ¿se quiere vaciar el carrito o no? Al ingresar "si" se llama a la funcion vaciar carrito, quedando en 0
  } else if (opcion === "3") {
    let vaciarCarritoCompras = prompt("Quieres vaciar el carrito? (si/no)");
    if (vaciarCarritoCompras.toLowerCase() === "si") {
      vaciarCarrito();
    }

    //opcion 4 te lleva al carrito.
  } else if (opcion === "4") {
    if (carrito.length === 0) {
      alert("No hay productos.");
    } else {
      let factura = "Sus productos:\n";
      for (let i = 0; i < carrito.length; i++) {
        factura +=
          carrito[i].cantidad +
          " x " +
          carrito[i].producto.titulos +
          " = " +
          carrito[i].subtotal.toFixed(2) +
          " ARS\n";
      }

      // "ACEPTAR" o "CANCELAR" para confirmar la compra.

      //si "ACEPTAR", hay un mensaje diciendo que se completó la compra, llama a la funcion vaciar carrito antes mencionada.

      // si pone "CANCELAR", llama a la funcion vaciar carrito.

      factura +=
        "Total: " + total.toFixed(2) + " ARS\nDeseas confirmar tu compra?";
      if (confirm(factura)) {
        alert("Gracias por su compra. Esperamos vuelvas pronto!");
      } else {
        alert("Compra cancelada. Que tengas buen dia!");
      }
      vaciarCarrito();
    }

    //opcion 5, el ciclo finaliza con el break.
  } else if (opcion === "5") {
    break;

    // en caso de ingresar otra cosa que no sea las opciones del 1 al 5, te avisará que no reconoce la opcion.
  } else {
    alert("Opción desconocida, pruebe de nuevo.");
  }
}

//el carrito se vacía y el total se va a cero.

function vaciarCarrito() {
  carrito = [];
  total = 0;
  alert("El carrito esta vacio.");
}
