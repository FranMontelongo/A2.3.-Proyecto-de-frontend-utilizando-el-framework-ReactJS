    import { usePersonajes } from "../hooks/usePersonajes";

    export function Personajes() {

        const { personajes, cargando, error } = usePersonajes();

        if (cargando) {
            return <p>Cargando personajes...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }

        return (
            <div>
                {/* Aquí mostraremos los personajes con .map */}

                <div>
                    {personajes.map((personaje) => (
                        <div key={personaje._id}>
                            <h2>{personaje.nombre}</h2>
                            <p>Especie: {personaje.especie}</p>
                            <p>Afiliación: {personaje.afiliacion}</p>
                            <p>Rol: {personaje.rol}</p>
                        </div>
                    ))}
                </div>

            </div>
        );
    }