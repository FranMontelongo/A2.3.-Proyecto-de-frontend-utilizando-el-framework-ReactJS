
import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserPanel } from "./UserPanel";

const Contenedor = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    background-color: rgba(0, 0, 0, 0.95);
    padding: 15px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 650px) {
        padding: 15px;
        flex-direction: column;
    }
`;

const Logo = styled(Link)`
    color: #ffe81f;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 3px;
    text-decoration: none;
`;

const Navegacion = styled.nav`
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
`;

const Enlace = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
        color: #ffe81f;
    }
`;

const Contenido = styled.main`
    flex: 1;
`;

const Footer = styled.footer`
    background-color: rgba(0, 0, 0, 0.95);
    color: white;
    text-align: center;
    padding: 20px;
`;

const ZonaUsuario = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export function Layout() {
    const { usuario } = useAuth();

    return (
        <Contenedor>
            <Header>
                <Logo to="/">STAR WARS</Logo>

                <Navegacion>
                    <Enlace to="/">Inicio</Enlace>
                    <Enlace to="/personajes">Personajes</Enlace>

                    <ZonaUsuario>
                        {usuario ? (
                            <UserPanel />
                        ) : (
                            <>
                                <Enlace to="/register">
                                    Registrarse
                                </Enlace>

                                <Enlace to="/login">
                                    Iniciar sesión
                                </Enlace>
                            </>
                        )}
                    </ZonaUsuario>
                </Navegacion>
            </Header>

            <Contenido>
                <Outlet />
            </Contenido>

            <Footer>
                © 2026 Universo Star Wars
            </Footer>
        </Contenedor>
    );
}
