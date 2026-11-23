export interface UsuarioAuth {
    id: string;
    username: string;
    email: string;
    rol: string;
}

export interface RespuestaLogin {
    mensaje: string;
    usuario: UsuarioAuth;
    token: string;
}
