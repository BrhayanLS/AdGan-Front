export interface IAllCattle {
    idCattle:        number;
    idOwner:         number;
    apellido:        string;
    correo:          string;
    contacto:        string;
    nombre:          string;
    estado:          number;
    fechaNacimiento: Date;
    nombreOwner:     string;
}

export interface IResumeCattle {
    idCattle:        number;
    contacto:        string;
    nombre:          string;
    estado:          number;
    edad:            string;
    owner:     string;
}

export interface ISoldCattle {
    owner:      string;
    edad:       string;
    nombre:     string;
    fechaVenta: Date;
    totalNeto:  number;
    peso:       number;
    idCattle:   number;
}

export interface ICattle {
    idCattle?:       number;
    nombre:          string;
    fechaNacimiento: Date;
    idOwner:         string;
}