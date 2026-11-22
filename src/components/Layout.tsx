import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";


const Contenedor = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
`;

const Navegacion = styled.nav`
    display: flex;
    align-items: center;
    gap: 25px;
`;

const Enlace = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        color: #ffe81f;
    }
`;

const Logo = styled(Link)`
    color: #ffe81f;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 3px;
`;

const Contenido = styled.main`
    flex: 1;
    padding: 30px;
`;

const Footer = styled.footer`
    padding: 20px;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
`;

export function Layout() {
    return (
        <Contenedor>

            <Header>
                <Logo to="/">STAR WARS</Logo>

                <Navegacion>
                    <Enlace to="/">Inicio</Enlace>
                    <Enlace to="/personajes">Personajes</Enlace>
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