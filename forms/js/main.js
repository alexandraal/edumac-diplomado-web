// Comentarios de una línea //
/* Comentarios de bloque */

/* 
$ es igual a jQuery

    Función "ready": Se encarga de ejecutar el código de JavaScript cuando el árbol DOM (Document Object Model) se ha renderizado.

    Sintaxis es:
        $();
    Adentro del paréntesis se escribe una función anónima.
    La sintaxis de la función anónima en JavaScript es:
        function () {}

    La sintaxis completa es:
        $ (function() {...code})

    Adentro de las llaves se escribe el código que se va a ejecutar.

    Variables en JS: Se utiliza la palabra reservada "var" para crear variables.

    Los tipos de datos que se puede guardar en una variable son:
        -STRING (Cadenas de texto y siempre van entre comillas).
        -NUMBER (Números naturales y nunca van entre comillas).
        -BOOLEAN (Valores lógicos binarios: TRUE or FALSE).
        -ARRAY (Conocidos como arreglos, matrices o vectores), se pueden guardar múltiples valores.
        -OBJECT (Objetos).
        -FUNCTION (Funciones anónimas).

    var texto1 = "Hola"
    var texto2 = "Mundo"
    var numero1 = 10;
    var numero2 = 20;

    var resultado = numero1 + numero2;

    Selectores en JS: Sirven para decirle al navegador a cúal elemento vamos a afectar.

    Sintaxis de un selector con jQuery:
        $("selector de tipo CSS")

    Objetos (OBJECT): Pueden tener "Propiedades" y/0 "Métodos":
        -Propiedades: STRING, NUMBER, BOOLEAN, ARRAY, OBJECT.
        -Métodos: FUNCTION.

        -Éstas propiedades y métodos van separados por comas.
    
            var yo = {
        nombre: "Alexandra",
        apellidoPaterno: "Anaya",
        apellidoMaterno: "Luna",
        edad: 24,
        esMexicano: true,
        pasatiempos: ["Nadar", "Correr", "Leer"],
        mascotas: {
            perro: {
                nombre: "Kyra",
                edad: 4
            },
            gato: {
                nombre: "Camila",
                edad: 1
            }
        },
        imprimirNombreCompleto: function () {
            console.log(
                this.nombre
                + " "
                + this.apellidoPaterno
                + " "
                + this.apellidoMaterno
            );
        }
    };

    console.log(yo.mascotas.gato.nombre);

    var imprimirNombrePerro = function() {
        console.log(yo.mascotas.gato.nombre);
    };

    imprimirNombrePerro();
    yo.imprimirNombrePerro();

    var animal1 = {
        nombre: "animal1",
        edad: 10
    };

    var animal2 = {
        nombre: "animal2",
        tipo: "perro"
    };

    var animalCombinado = $.extend(animal1, animal2);
    console.log(animalCombinado);

        */

$(function () {
    // variables
    var form = $("#formContact");

// Set messages values
$.extend (
    $.validator.messages,
    {
        required: "Este campo es obligatorio",
        email: "Ingresa un correo electrónico válido",
        url: "Ingresa una URL válido",
        rangelength: "Ingresa entre {0} y {1} carácteres",
        number: "Ingresa únicamente valores númericos",
        minlength: "Debes escribir al menos {0} carácteres",
        maxlength: "No debes de exceder {0} carácteres"
    }
);

    // Apply validation plugin
    form.validate({
        rules: {
            formTel: {
                number: true,
                rangelength: [8, 10]
            },
            formMessage: {
                minlength: 50,
                maxlength: 100
            }
        },
        /*
        messages: {
            formTel: {
                number: "Tiene que ser un número válido"
            }
        }
        */
    });

});