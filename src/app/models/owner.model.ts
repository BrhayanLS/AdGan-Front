export interface IAllOwner {
    idOwner:  number;
    estado:   boolean;
    nombre:   string;
    apellido: string;
    username: string;
    contacto: string;
    correo:   string;
    password: string;
    roles:    Role[];
}

export interface Role {
    id:   number;
    name: null | string;
}
