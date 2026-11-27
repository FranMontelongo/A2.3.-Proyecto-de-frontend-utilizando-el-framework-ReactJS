
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { UsuarioAuth } from "../types/Auth";

interface AuthContextType {
    usuario: UsuarioAuth | null;
    token: string | null;
    iniciarSesion: (usuario: UsuarioAuth, token: string) => void;
    cerrarSesion: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {

    // Recuperar usuario y token al cargar la aplicación
    const [usuario, setUsuario] = useState<UsuarioAuth | null>(() => {
        const usuarioGuardado = localStorage.getItem("usuario");

        if (!usuarioGuardado) return null;

        try {
            return JSON.parse(usuarioGuardado) as UsuarioAuth;
        } catch {
            localStorage.removeItem("usuario");
            return null;
        }
    });

    const [token, setToken] = useState<string | null>(
        () => localStorage.getItem("token")
    );

    // Guardar los datos al iniciar sesión
    function iniciarSesion(usuario: UsuarioAuth, token: string) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        localStorage.setItem("token", token);

        setUsuario(usuario);
        setToken(token);
    }

    // Eliminar los datos al cerrar sesión
    function cerrarSesion() {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");

        setUsuario(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                usuario,
                token,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const Auth = useContext(AuthContext);

    if (Auth === null) {
        throw new Error("useAuth debe utilizarse dentro de AuthProvider");
    }

    return Auth;
}
