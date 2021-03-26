export const getImagen = async () => {

    try {
        const apiKey = 'Z5LzXTWbMtSxFn9znkiV82DobUnJts1i';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);+
        return url;
    } catch (error) {
        return 'No se pudo generar imagen';
    }

}

// getImagen();

/*
    En el Asyn y Await es una manera mas simple de poder hacer el manejo de promesas y trabajar directamente
    con las respuestas de una promesa, haciendo pausar el avance de la aplicación hasta que se de un resultado
    correcto o fallo de el async, esto con elproblema de que no se pueden esperar que las respuestas
    se puedan controlar con un catch como se hace normalmente, sino que sea necesario hacer el uso de
    try/catch para poder manejar los errores.
*/