const API_URL = import.meta.env.VITE_API_URL;

// Función reutilizable para realizar peticiones HTTP
export async function peticionAPI(
    ruta: string,
    opciones: RequestInit = {}
) {
    // Realizar petición HTTP
    const response = await fetch(`${API_URL}${ruta}`, opciones);

    // TODO: comprobar si la respuesta es correcta.

    if (response.ok === false) {
        throw new Error("Error en la petición");
    }

    // TODO: devolver los datos en formato JSON.
    return await response.json();
}