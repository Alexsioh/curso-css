// Función autoejecutable (IIFE). Se ejecuta apenas se carga el script,
// sin necesidad de ser llamada explícitamente.
(function(){

    // Seleccionamos todos los elementos con la clase ".testimony__body"
    // y los convertimos en un array real usando el spread operator [...NodeList].
    const sliders = [...document.querySelectorAll('.testimony__body')]

    // Seleccionamos los botones de navegación (siguiente y anterior).
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    // Variable que usaremos para controlar la posición del testimonio actual.
    let value;

    // Cuando el usuario hace clic en el botón "next",
    // llamamos a changePosition con el parámetro 1 (avanzar un paso).
    buttonNext.addEventListener('click', ()=>{
        changePosition(1)
    })

    // Cuando el usuario hace clic en el botón "before",
    // llamamos a changePosition con el parámetro -1 (retroceder un paso).
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1)
    })

    // Función que cambia la posición del testimonio mostrado.
    changePosition = (add) =>{

        // Obtenemos el testimonio actual: buscamos el elemento que tiene la clase
        // ".testimony__body--show" y extraemos su data-id.
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id

        // Convertimos ese id (string) a número para trabajar con índices.
        value = Number(currentTestimony)

        // Sumamos el parámetro "add", que puede ser 1 (avanzar) o -1 (retroceder).
        value += add

        // Ocultamos el testimonio actual removiendo la clase que lo hace visible.
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show')

        // Controlamos el bucle infinito:
        // Si "value" se pasa del último testimonio, volvemos al primero.
        // Si "value" se va antes del primer testimonio, volvemos al último.
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1
        }

        // Mostramos el nuevo testimonio agregando la clase que lo hace visible.
        sliders[value-1].classList.add('testimony__body--show')

    }

})(); // Fin de la función autoejecutable
