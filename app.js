//le pedimos al usuario que nos de rango del juego segun lo que dese
let elijeRango = parseInt(prompt("ingresa el rango para el numero secreto que deses "))
let numeroSecreto = Math.floor(Math.random()* elijeRango)+1;
let numeroUsuario= 0
let intentos = 1;
 
//let palabraIntentos= "intento"
let maximoIntento= 3
console.log(numeroSecreto)
while (numeroUsuario != numeroSecreto){
      numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${ elijeRango}  por favor:`));


    console.log(typeof(numeroUsuario));

    /* Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto) {
        //hacertamos fue verdadera la condicon 
        alert (`¡Acertaste, el número: ${numeroUsuario} . lo hiciete en ${intentos } ${intentos == 1 ? "intento"  : " intentos" }`) 

    } else {
        if (numeroUsuario < numeroSecreto) {
            alert("El número secreto es mayor.");
        } else {
            alert("El número secreto es menor.");
        }
        //incrementamso el contador cuando no acierta 
        //intentos= intentos + 1; esta forma copleta
        //intentos++; esta forma mas simle
        intentos++;
        //palabraIntentos="intentos "
        if (intentos > maximoIntento ){
           alert(`llegaste a numero maximo de ${maximoIntento} intentos`)
           break
        }
    }
}