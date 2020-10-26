let imagen;

imagen = $('img');

imagen.hover(function(){
    $(this).fadeOut(1500, function() {
        $(this).after($(this).prop('alt'));
    })
});

