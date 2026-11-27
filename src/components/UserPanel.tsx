
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Avatar = styled.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid #ffe81f;
    object-fit: cover;
`;

const NombreUsuario = styled.span`
    color: white;
    font-weight: bold;
`;

const BotonCerrar = styled.button`
    background: transparent;
    border: 1px solid #ffe81f;
    color: #ffe81f;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: #ffe81f;
        color: black;
    }
`;

export function UserPanel() {
    const { usuario, cerrarSesion } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        cerrarSesion();
        navigate("/");
    }

    if (!usuario) return null;

    return (
        <Contenedor>
            <Avatar
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Foto de perfil"
            />

            <NombreUsuario>
                {usuario.username}
            </NombreUsuario>

            <BotonCerrar onClick={handleLogout}>
                Cerrar sesión
            </BotonCerrar>
        </Contenedor>
    );
}
