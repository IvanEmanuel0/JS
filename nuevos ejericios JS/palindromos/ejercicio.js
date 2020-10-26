let frase, boton, resultado;

frase = $('input');
boton = $('button');
resultado = $('#resultado')

boton.click(function(){
    esPalindromo();
})

function esPalindromo(){
    let original = unirFrase();
    let invertida = invertirFrase(original);
    if(original == invertida) resultado.html("<p>La frase en un palíndromo.</p>");
    else resultado.html("<p>La frase no es un palindromo.</p>")
}

function unirFrase() {
    let palabras = frase.val().split(" ");
    let fraseUnida = palabras.join("");
    return fraseUnida;
}

function invertirFrase(frase) {
    let fraseInvertida = "";
    for(let i = frase.length ; i > 0; i--){
        fraseInvertida+=frase[i-1];
    }
    return fraseInvertida;
}