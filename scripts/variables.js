/**
 * Generalidades de JavaScript:
 * 
 * 1. JavaScript !== Java
 * 2. JavaScript no es un lenguaje compilado
 * 3. JavaScript es un lenguaje de alto nivel
 * 4. JavaScript funciona en el navegador
 * 5. JavaScript es el unico lenguaje de progra de los navegadores
 * 
 */

 /**
  * Variable types:
  *     undefined
  *     null
  *     boolean
  *     number Integer
  *     number Float
  *     string
  *     array
  *     object
  *     function
  *     events
  */

/**
 * ¿Cómo nombrar variables en JS?
 * 
 * const camelCase = '';
 * const ricardoJosueVelascoEstrada = '';
 * 
 * talo !== Talo
 * 
 */

let undefinedVar = undefined;
const nullVar = null;
const bool = true;
const number = 1;
const string = 'hola mundo asfd; jdjfjf a djfjd  jsajfkdskfjsdkjfksajkfjk';
const array = ['hola', 'mundo', string];
//            [0,    1  ,    2  ];
// array[0] == 'hola';
const person = {
    name: 'Josue',
    age: 27,
    profesion: 'programador',
    hobby: 'piano',
    trabajo: 'Edutec',
    mensajes: ['mensaje 1', 'mensaje 2'],
    suma: function suma() {
        return 1 + 1;
    }
};
// persona.hobby == 'piano'

function hola() {
    return 'hola talo';
}

/**
 * ¿Cuál es la diferencia entre == y ===?
 */

if (person.name === 'Ricardo') {
    console.log('Es verdadero');
} else {
    console.log('Es falso');
}

let clickCount = 0;
document.addEventListener('click', function () {
    clickCount = clickCount + 1;
    console.log(clickCount);
})

document.addEventListener('scroll', function () {
    console.log('Scroll!');
})