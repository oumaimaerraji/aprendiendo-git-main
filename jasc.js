var pregHTML = [

    "1.¿Cuál es el element HTML que ese utiliza para definir un encabezado de página?",

    "2. ¿Cuál es el atributo HTML que se utiliza para definir el texto alternativo de una imagen?",

    "3. ¿Cuál es el elemento HTML que se utiliza para crear una lista no ordenada?",

    "4.¿Cuál es el atributo HTML que se utiliza para especificar la dirección de lectura del texto?",

    "5. ¿Cuál es el atributo HTML que se utiliza para especificar el tipo de documento?",

    "6. ¿Qué significa el acrónimo HTML?",

    "7.  ¿Qué etiqueta es correcta para indicar un salto de línea? ",

    "8.  ¿Cuál es la forma correcta de escribir un enlace en HTML?",

    "9. ¿Qué etiqueta se usa para denominar cada fila en una tabla html?",

    "10.¿Cómo harías para que se abriera el enlace en la misma pestaña en la que nos encontramos?",

];

//las 4 respuestas

var respuestaHTML1 = ['h1', 'alt', '<ol>', 'dir', 'type', 'Hyper Text Mask Language', '</br>', '<a title=» «>…</>', '<ol>', '<link href=»#» target=»_blank»>…</link>']

var respuestaHTML2 = ['<title>', 'src', '<li>', 'lang', 'class', 'Hard Text Markup Language', '<br/>', '<a href=» «>…</a>', '<tr>', ' <link href=»#» target=»_self»>…</link>']

var respuestaHTML3 = ['<head>', 'href', '<ul>', 'class', 'lang', 'Hyper Text Markup Language', ' <breakLine>', ' <a src=» «>…</a>', '<li>', '<a href=»#» target=»_blank»>…</a>']

var respuestaHTML4 = ['<header>', 'title', '<list>', ' id', 'doctype', 'Hard Text Mask Language', '<hr>', '<link href=» «>…<link>', '<list>', '<a href=»#» target=»_self»>…</a>']



//las respuestas correctas de HTML

var correctasHTML = ["<header>", " alt", "<ul>", "dir", "doctype", "Hyper Text Markup Language", "<br/>", "<a href=» «>…</a>", "<tr>", "<a href=»#» target=»_self»>…</a>"];



//CSS
var preguntascss = [
    "1. ¿Cuál es el valor predeterminado del atributo display de CSS?",
    "2. ¿Cuál es la propiedad CSS que se utiliza para especificar la imagen de fondo de un elemento?",
    "3. ¿Cuál es el selector de CSS que se utiliza para aplicar un estilo a un elemento cuando el usuario pasa el mouse sobre él?",
    "4. ¿Cuál es el valor predeterminado del atributo position de CSS?",
    "5. ¿Cuál es el valor predeterminado del atributo overflow de CSS?",
    "6. ¿Cuál es la propiedad CSS que se utiliza para especificar el tamaño de letra de un elemento?",
    "7. ¿Cuál es el selector de CSS que se utiliza para aplicar un estilo a un elemento cuando se encuentra en su estado activo?",
    "8. ¿Cuál es la propiedad CSS que se utiliza para especificar el espaciado entre letras?",
    "9. ¿Cuál es el selector de CSS que se utiliza para aplicar un estilo a un elemento cuando se encuentra visitado?",
    "10. ¿Cuál es la propiedad CSS que se utiliza para especificar el espacio entre líneas de un elemento?",
    "11. ¿Cuál es la propiedad CSS que se utiliza para especificar el estilo de borde de un elemento?",
    "12. ¿Cuál es el selector de CSS que se utiliza para aplicar un estilo a un elemento cuando está enfocado?",
    "13. ¿Cuál es la propiedad CSS que se utiliza para especificar el ancho de un borde?",
    "14. ¿Cuál es la propiedad CSS que se utiliza para especificar la opacidad de un elemento?",
    "15. ¿Cuál es la propiedad CSS que se utiliza para especificar el grosor de la línea de borde en una tabla?",
    "16. ¿Cuál es el selector de CSS que se utiliza para aplicar un estilo a un elemento cuando está desactivado?",
    "17. ¿Cuál es la propiedad CSS que se utiliza para especificar el color de fondo de un elemento?",
    "18. ¿Cuál es la propiedad CSS que se utiliza para especificar la posición de un elemento?",
]



//las 4 respuestas css
var respuestacss1 = ['block', 'background-color', ':hover', 'static', ' visible', ' font-family', ' :hover', 'letter-spacing', ' :hover', 'letter-spacing ', ' border-color', ':hover', ' border-color', ' opacity', 'border-color', ' :hover', 'background-color', ' position',]
var respuestacss2 = ['inline', 'background-image', ':active', 'relative', 'hidden', 'font-size ', ' :active', 'word-spacing', ':active', 'word-spacing', ' border-style', ':active', 'border-style', ' filter ', 'border-style', ' :active', ' background-image', ' top ',]
var respuestacss3 = ['inline-block', ' background-position', ':visited', 'absolute', 'scroll', ' font-style', ':visited', ' line-height', ' :visited', ' line-height', 'border-width', ':visited', 'border-width', 'visibility', ' border-width', ' :visited', 'background-position ', ' left ',]
var respuestacss4 = ['none', ' background-size', ':focus', 'fixed', 'auto', 'font-weight', ' :focus', 'text-indent', ':focus', ' text-indent', 'border-radius', ' :focus', ' border-radius', 'display', 'border-collapse', ' :disabled', 'background-size', 'all of the above',]


//las respuestas correctas
var correctascss = ['inline', ' background-image', ':hover', 'static', 'visible', 'font-size', ':active', 'letter-spacing', ':visited', 'line-height', 'border-style', ':focus', 'border-width', 'opacity', 'border-width', ':disabled', 'background-color', 'position',]



//form
var pregform = [

    "1. ¿Cuál es el elemento HTML que se utiliza para crear un formulario?",

    "2. ¿Cuál es el atributo HTML que se utiliza para especificar el tipo de entrada de un campo de formulario?",

    "3. ¿Cuál es el atributo HTML que se utiliza para asociar una etiqueta con un campo de formulario?",

    "4. ¿Cuál es el elemento HTML que se utiliza para crear un campo de entrada de texto de una sola línea?",

    "5. ¿Cuál es el elemento HTML que se utiliza para crear un campo de entrada de contraseña?",

    "6. ¿Cuál es el atributo HTML que se utiliza para especificar una opción en un elemento de lista desplegable?",

    "7. ¿Cuál es el elemento HTML que se utiliza para crear un botón de envío de un formulario?",

    "8. ¿Cuál es el atributo HTML que se utiliza para especificar el valor predeterminado de un campo de formulario?",

    "9. ¿Cuál es el elemento HTML que se utiliza para crear un campo de entrada de correo electrónico?",

    "10.¿Cuál es el atributo HTML que se utiliza para especificar una opción seleccionada en un elemento de lista desplegable?",

];


//las 4 respuestas del form

var respuestaform1 = ['<form>', 'type', 'for', '<input type="text">', '<input type="text">', 'value', '<input type="submit">', 'value', '<input type="text">', 'selected']
var respuestaform2 = ['<input>', 'name', 'id', '<input type="password">', '<input type="password">', 'selected', '<input type="reset">', 'name', '<input type="password">', 'value']
var respuestaform3 = ['<button>', 'value', ' class', '<textarea>', '<textarea>', 'name', 'button>', 'type', '<input type="email">', 'name']
var respuestaform4 = ['<label>', 'placeholder', 'name', '<input type="email">', '<input type="email">', 'id', '<submit>', 'placeholder', '<textarea>', 'id']
var correctasform = ['<form>', 'type', 'for', '<input type="password">', '<input type="password">', 'value', '<input type="submit">', 'value', '<input type="email">', 'selected']




//dar funcionalidad al button aceptar para pasar a la siguiente pregunta 
function botonform(){
    document.getElementById('preguntas').value=pregform[0];
    document.getElementById('a').value=respuestaform1[0];
    document.getElementById('b').value=respuestaform2[0];
    document.getElementById('c').value=respuestaform3[0];
    document.getElementById('d').value=respuestaform4[0];
} 





function siguiente(){

    var indice_aleatorio = Math.floor(Math.random()*pregform.length);
    preguntasaleatorias=indice_aleatorio;

 document.getElementById('preguntas').value=pregform[preguntasaleatorias];

 document.getElementById('a').value=respuestaform1[preguntasaleatorias];
 document.getElementById('b').value=respuestaform2[preguntasaleatorias];
 document.getElementById('c').value=respuestaform3[preguntasaleatorias];
 document.getElementById('d').value=respuestaform4[preguntasaleatorias];
}

// -------------------------------------------------FUNCION DE VALIDAR RESPUESTA--------------------------------------------------------


function validarRespuesta(respuestaUsuario, respuestaCorrecta) {
        // Comprobamos si la respuesta del usuario es igual a la respuesta correcta
        if (respuestaUsuario === respuestaCorrecta) {
            // Si es así, devolvemos true
            return true;
        } else {
            // Si no, devolvemos false
            return false;
        }
    }
  
  function validarRespuestas(respuestasUsuario, respuestasCorrectas) {
        // Creamos una variable para almacenar el número de respuestas correctas
        let numRespuestasCorrectas = 0;

        // Iteramos a través de las respuestas del usuario y las respuestas correctas
        for (let i = 0; i < respuestasUsuario.length; i++) {
            // Comprobamos si el usuario ha respondido a la pregunta
            if (respuestasUsuario[i] !== "") {
                // Si el usuario ha respondido, comparamos su respuesta con la respuesta correcta correspondiente
                if (validarRespuesta(respuestasUsuario[i], respuestasCorrectas[i])) {
                    // Si la respuesta es correcta, incrementamos el contador de respuestas correctas
                    numRespuestasCorrectas++;
                }
            }
        }

        // Devolvemos el número total de respuestas correctas
        return numRespuestasCorrectas;
    }

  // Supongamos que las respuestas correctas son las siguientes (en este caso, todas las respuestas son "A")
  const respuestasCorrectas = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"];

// Supongamos que las respuestas del usuario todavía no se conocen
const respuestasUsuario = ["", "", "", "", "", "", "", "", "", ""];

// Llamamos a la función validarRespuestas para comprobar las respuestas del usuario
const numRespuestasCorrectas = validarRespuestas(respuestasUsuario, respuestasCorrectas);

// Mostramos el número de respuestas correctas
console.log(`El usuario ha obtenido ${numRespuestasCorrectas} respuestas correctas de 0`);