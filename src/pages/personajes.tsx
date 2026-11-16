
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
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "20px",
                width: "100%"
            }}
        >
            {personajes.map((personaje) => (
                <div
                    key={personaje._id}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        color: "white",
                        padding: "20px",
                        border: "2px solid #ffe81f",
                        borderRadius: "10px",
                        textAlign: "left"
                    }}
                >
                    <h2
                        style={{
                            color: "#ffe81f",
                            marginTop: 0,
                            marginBottom: "15px"
                        }}
                    >
                        {personaje.nombre}
                    </h2>

                    <p>Especie: {personaje.especie}</p>
                    <p>Afiliación: {personaje.afiliacion}</p>
                    <p>Rol: {personaje.rol}</p>
                </div>
            ))}
        </div>
    );
}
