import { Link } from "react-router-dom";

export function Inicio() {
    return (
        <div>
            <h1>Bienvenido al Universo Star Wars</h1>
            <p>Explora personajes y usuarios de la galaxia.</p>

            <Link to="/personajes">Ver personajes</Link>
        </div>
    );
}