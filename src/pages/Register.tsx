
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
    AuthForm,
    GrupoFormulario,
    TextoAlternativo,
    EnlaceAuth
} from "../components/AuthForm";

import { peticionAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import type { RespuestaLogin } from "../types/Auth";

export function Register() {

    // Estados del formulario
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Contexto de autenticación y navegación
    const { iniciarSesion } = useAuth();
    const navigate = useNavigate();

    // Función para enviar el formulario
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar contraseña
        if (password.length < 6) {
            alert("La contraseña tiene que ser de mínimo 6 caracteres");
            return;
        }

        // Validar nombre de usuario
        if (username.length < 3) {
            alert("El nombre de usuario tiene que ser de mínimo 3 caracteres");
            return;
        }

        const datosRegistro = {
            username,
            email,
            password
        };

        try {

            // Registrar usuario
            await peticionAPI("/auth/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosRegistro)
            });

            // Iniciar sesión automáticamente
            const respuesta: RespuestaLogin = await peticionAPI(
                "/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            // Guardar usuario y token en el contexto
            iniciarSesion(respuesta.usuario, respuesta.token);

            // Redirigir a la página principal
            navigate("/");

        } catch (error) {
            console.error("Error en el registro:", error);
            alert("No se ha podido completar el registro");
        }
    };

    return (
        <>
            <AuthForm
                titulo="Crear cuenta"
                textoBoton="Registrarse"
                onSubmit={handleSubmit}
            >
                <GrupoFormulario>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength={3}
                    />
                </GrupoFormulario>

                <GrupoFormulario>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </GrupoFormulario>

                <GrupoFormulario>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </GrupoFormulario>
            </AuthForm>

            <TextoAlternativo>
                ¿Ya tienes una cuenta?{" "}
                <EnlaceAuth to="/login">
                    Inicia sesión
                </EnlaceAuth>
            </TextoAlternativo>
        </>
    );
}
