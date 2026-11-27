
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm, GrupoFormulario } from "../components/AuthForm";
import { peticionAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import type { RespuestaLogin } from "../types/Auth";

export function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { iniciarSesion } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
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

            // Ir a la página principal
            navigate("/");

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Error al iniciar sesión. Comprueba tus credenciales.");
        }
    };

    return (
        <AuthForm
            titulo="Iniciar sesión"
            textoBoton="Entrar"
            onSubmit={handleSubmit}
        >
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
                />
            </GrupoFormulario>
        </AuthForm>
    );
}
