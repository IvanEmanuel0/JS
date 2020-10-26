let numero, texto;

numero = $('span');
texto = $('textarea');

$(texto).keyup(function(){
    contarCaracteres();
    
    
})

function contarCaracteres() {
    let maximo = 80;
    let actual = texto.val().length;
    let restante = maximo - actual;
    numero.html(restante);
    if(restante < 0) {
        texto.addClass('bg-danger');
    } else {
        texto.removeClass('bg-danger');
    }
}