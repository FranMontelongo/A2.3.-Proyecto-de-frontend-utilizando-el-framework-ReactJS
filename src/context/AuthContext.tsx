import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { UsuarioAuth } from "../types/Auth";

interface AuthContextType {
    usuario: UsuarioAuth | null;
    setUsuario: (usuario: UsuarioAuth | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<UsuarioAuth | null>(null);

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
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