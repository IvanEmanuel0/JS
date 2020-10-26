let mensaje, boton;

mensaje = $('h2');
boton = $('button');

boton.click(function(){
    if($(this).html()==="Ver Menos"){
        $(this).html("Ver Más")
    } else {
        $(this).html("Ver Menos");
    }
    mensaje.toggle(500);
})
    
    
