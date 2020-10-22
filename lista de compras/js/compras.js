let descripcion, cantidad, precio, agregar;
let productoDescripcion, productoCantidad, productoPrecio, productoTotal;
let totalCantidad, totalPrecio;

descripcion = $('#descripcion');
cantidad = $('#cantidad');
precio = $('#precio');

agregar = $('#agregar');

productoDescripcion = $('#producto-descripcion');
productoCantidad = $('#producto-cantidad');
productoPrecio = $('#producto-precio');
productoTotal = $('#producto-total');

totalCantidad = $('#total-cantidad');
totalPrecio = $('#total-precio');

function listarProducto(descripcion, cantidad, precio){
    productoDescripcion.append('<p>' + descripcion.val() + '</p>');
    productoCantidad.append('<p>' + cantidad.val() + '</p>');
    productoPrecio.append('<p>' + precio.val() + '</p>');
    productoTotal.append('<p>' + calcularProductoTotal(cantidad, precio) + '</p>');
    limpiarInputs();
}

function calcularProductoTotal(cantidad, precio){
    let total = 0;
    cantidad = parseInt(cantidad.val());
    precio = parseInt(precio.val());
    total = cantidad * precio;
    return total;
}

function limpiarInputs(){
    descripcion.val("");
    cantidad.val("");
    precio.val("");
}

function imprimirTotal(productoCantidad, productoTotal){
    totalCantidad.html('<p>' + calcularTotalCantidad(productoCantidad) + '</p>');
    totalPrecio.html('<p>' + calcularTotalPrecio(productoTotal) + '</p>');
}

function calcularTotalCantidad(productoCantidad){
    let cantidad = 0;
    productoCantidad.each(function(){
        cantidad += parseInt(productoCantidad.text());
    });
    return cantidad;
}

function calcularTotalPrecio(productoTotal){
    let total = 0;
    productoTotal.each(function(){
        total += parseInt(productoTotal.text());
    });
    return total;
}

agregar.click(function(){
    listarProducto(descripcion, cantidad, precio);
    imprimirTotal(productoCantidad, productoTotal);
});