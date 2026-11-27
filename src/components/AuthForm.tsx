
import styled from "@emotion/styled";
import type { ReactNode, FormEvent } from "react";
import { Link } from "react-router-dom";

interface AuthFormProps {
    titulo: string;
    textoBoton: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}

const ContenedorLogin = styled.div`
    min-height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TarjetaLogin = styled.div`
    width: 100%;
    max-width: 420px;
    padding: 35px;
    background-color: rgba(0, 0, 0, 0.85);
    border: 2px solid #ffe81f;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 232, 31, 0.15);
`;

const Titulo = styled.h1`
    color: #ffe81f;
    text-align: center;
    margin-bottom: 30px;
`;

const BotonLogin = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #ffe81f;
    color: black;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #e6d01b;
    }
`;

export const GrupoFormulario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;

    label {
        color: white;
        font-weight: bold;
    }

    input {
        padding: 12px;
        border: 1px solid #555;
        border-radius: 6px;
        background-color: #101b2b;
        color: white;
        font-size: 15px;
        outline: none;

        &:focus {
            border-color: #ffe81f;
        }
    }
`;

export const TextoAlternativo = styled.p`
    text-align: center;
    color: white;
    margin-top: 20px;
`;

export const EnlaceAuth = styled(Link)`
    color: #ffe81f;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export function AuthForm({
    titulo,
    textoBoton,
    onSubmit,
    children
}: AuthFormProps) {
    return (
        <ContenedorLogin>
            <TarjetaLogin>
                <form onSubmit={onSubmit}>
                    <Titulo>{titulo}</Titulo>

                    {children}

                    <BotonLogin type="submit">
                        {textoBoton}
                    </BotonLogin>
                </form>
            </TarjetaLogin>
        </ContenedorLogin>
    );
}
