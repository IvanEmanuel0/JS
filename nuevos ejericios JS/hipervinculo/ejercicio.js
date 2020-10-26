let link = $('a');

link.click(function(){
    generalLinkAleatorio();
})

function generalLinkAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    switch(numeroAleatorio){
        case 0:
            link.prop('href', 'https://outlook.live.com');
            break;
        case 1:
            link.prop('href', 'https://mail.google.com/');
            break;
        case 2:
            link.prop('href', 'https://espanol.yahoo.com/');
            break;
    }
}