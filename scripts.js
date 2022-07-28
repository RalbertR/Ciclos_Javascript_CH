
function juegoSuma(){

    let nombre = prompt("Cual es tu nombre?")
    let gameOver = false;
    let numero = 0;
    let suma = 0;
    let numeroIngresado = 0;
    let segundoNumero = 0;
    let puntaje = 0;

    alert("Bienvenido " + nombre + " al juego de las sumas, empezemos!")

    do{
        segundoNumero = numero + 1;
        suma = numero + segundoNumero;
        numeroIngresado = parseInt(prompt('Cuanto es: ' + numero + ' + ' + segundoNumero + '?'));
        
        if(numeroIngresado == suma){
            puntaje = puntaje + 100;
            alert('Muy bien!! Continuemos.. PUNTAJE: ' + puntaje);
            numero = suma;
        }else{
            gameOver = true;
            alert('Mala suerte ' + nombre + '! Tu puntaje fue: ' + puntaje + '.');
        }
    }while(gameOver == false)
}
