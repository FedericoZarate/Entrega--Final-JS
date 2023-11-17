function agregarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("elementos"));

  if (!memoria) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("elementos", JSON.stringify([nuevoProducto]));
  } else {
    const indiceProducto = memoria.findIndex(
      (elementos) => elementos.id === producto.id
    );

    const nuevaMemoria = memoria;
    if (indiceProducto === -1) {
      nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
    } else {
      nuevaMemoria[indiceProducto].cantidad++;
    }
    localStorage.setItem("elementos", JSON.stringify(nuevaMemoria));
  }
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}
