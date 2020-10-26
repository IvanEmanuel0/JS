let menu = $('.menu');
let titulo = $('h1');
let texto = $('p'); 
let menuExpandido = $('.menu-expandido');
let expandido = false;

menu.click(function(){
    if (!expandido){
        $(this).animate({
            height : '+=130px'
        },1500)
        titulo.toggle();
        texto.toggle();
        expandido = true;
    } else {
        $(this).animate({
            height : '-=130px'
        },500)
        titulo.toggle();
        texto.toggle();
        expandido = false;
    }

});

