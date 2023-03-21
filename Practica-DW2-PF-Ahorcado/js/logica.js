//base de datos 76
let baseDeDatos = [
    'comida', 'conocer', 'camello', 'corbata', 'corneta', 'cornisa', 'cortina', 'cuchilla', 'cursillo', 'docente', 'domingo', 'doncella', 'dormido', 'durante', 'escriba', 'escribir', 'espada', 'espalda', 'espeso', 'establo', 'estaca', 'estado', 'absorbente', 'banderola', 'bañadera', 'barandilla', 'barbaridad', 'barbarismo', 'baritono', 'barredora', 'benevola', 'benevolo', 'boligrafo', 'cartilago', 'celebrado', 'centigrado', 'absolutismo', 'absolutista', 'babilonico', 'bachillerato', 'bactericida', 'batalladora', 'cabalgadura', 'cabalistico', 'calificable', 'alfa', 'algo', 'alma', 'alto', 'antes', 'balsa', 'banco', 'baño', 'barco', 'bello', 'beso', 'blusa', 'boca', 'cada', 'cama', 'caña', 'casa', 'casi', 'caso', 'claro', 'coco', 'coma', 'como', 'decir', 'dejar', 'desde', 'entrar', 'foca', 'foco', 'gente', 'habla'
];
//Variables principales
var btn = document.getElementById('nuevoJuego');
var imagen = document.getElementById('imagen');
var btnTeclado = document.querySelectorAll('#teclado button');
var errores = 0;
var aciertos = 0;
var palabra;

btn.addEventListener('click', nuevoJuego); //Asigna la funcion al evento 'click'

function nuevoJuego(event) {
    //Reseteo del juego
    document.getElementById('respuesta').innerHTML = null;
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    errores = 0;
    aciertos = 0;
    let secreto = document.getElementById('palabraFracturada');
    secreto.innerHTML = '';
    //-------------------------------------------------------------

    //Elegir la palabra de forma aleatoria
    let azar = Math.floor(Math.random() * 76);
    console.log(azar);//prueba
    palabra = baseDeDatos[azar];
    let tamañoPalabra = palabra.length;
    //-------------------------------------------------------------
    
    //Habilitar botones
    for (let i = 0; i < btnTeclado.length; i++) {
        btnTeclado[i].disabled = false;
    }
    //-------------------------------------------------------------

    //Creamos etiquetas Span
    for (let i = 0; i < tamañoPalabra; i++) {
        const span = document.createElement( 'span' );
        secreto.appendChild(span);
    }
    console.log(palabra);//prueba
    //-------------------------------------------------------------

}
//Asigna la funcion al evento 'clickTEclado' pero a cada letra
for (let i = 0; i < btnTeclado.length; i++) {
    btnTeclado[i].addEventListener('click', clickTeclado)
}
//-------------------------------------------------------------

function clickTeclado(event) {
    //Saber el contenido de cada boton del teclado y saber si este esta dentro de la palabra
    let buscaSpan = document.querySelectorAll('#palabraFracturada span')
    //Saber cual de todas las letra llamo a la funcion
    let button = event.target;
    button.disabled = true;//tecla desabilitada

    let letra = button.innerHTML.toLowerCase(); // Pasar a minuscula

    let correcto = false;//asumimos que se equivoco

    //Comparamos cada letra selecionada con cada letra de la palabrasecreta su
    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            buscaSpan[i].innerHTML = letra;//cambio contenido con esa letra
            aciertos++;
            correcto = true;
        }
    }
    //----------------------------------------------------------------------

    //Verificamos los errores hasta el momento y cambiamos la imagen por cada error Acerto sigue en falso
    if (correcto == false) {
        errores++;
        let srcCambiado = "img/img" + errores + ".png";
        imagen.src = srcCambiado;
    }
    //----------------------------------------------------------------------

    //verificamos si gano o perdio
    if (errores == 7) {
        document.getElementById('respuesta').innerHTML = "Perdiste era: " + palabra;
        gameOver();
    } else if (aciertos == palabra.length) {
        document.getElementById('respuesta').innerHTML = "¡GANASTE!";
        gameOver();
    }
    //----------------------------------------------------------------------
    console.log("la letra " + letra + " en la palabra " + palabra + " ¿existe? " + correcto); //prueba
}

//Reseteo del juego -  Desabilitga los botones y habilita 'Nuevo juego'
function gameOver() {
    for (let i = 0; i < btnTeclado.length; i++) {
        btnTeclado[i].disabled = true;
    }
    btn.disabled = false;
}
gameOver()