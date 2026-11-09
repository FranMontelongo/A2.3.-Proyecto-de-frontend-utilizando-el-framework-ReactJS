import { useEffect, useState } from "react";
import { peticionAPI } from "../services/api";
import type { Personaje } from "../types/Personaje";

export function usePersonajes() {

    // Guardará la lista de personajes
    const [personajes, setPersonajes] = useState<Personaje[]>([]);

    // Indicará si estamos cargando los datos
    const [cargando, setCargando] = useState<boolean>(true);

    // Guardará posibles mensajes de error
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        // Función para obtener los personajes de la API
        const obtenerPersonajes = async () => {

            try {
                const datos = await peticionAPI("/StarWars");
                setPersonajes(datos);

            } catch (err) {
                // Aquí guardaremos el mensaje de error
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setCargando(false);
            }

        };
        obtenerPersonajes();

    }, []);

    return {
        personajes,
        cargando,
        error
    };

}