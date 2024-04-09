export interface IAllSale {
    idSale:       number;
    estado:       boolean;
    fechaVenta:   Date;
    precioKilo:   number;
    valorCamion:  number;
    valorBascula: number;
    saleCattles:  SaleCattle[];
}

export interface SaleCattle {
    idSaleCattle: number;
    peso:         number;
    totalNeto:    number;
    total:        number;
    cattleId:     number;
}

export interface ISale {
    fechaVenta?:   Date;
    precioKilo?:   number;
    valorCamion?:  number;
    valorBascula?: number;
    saleCattles?:  SaveSaleCattle[];
}

export interface SaveSaleCattle {
    cattleId: number;
    peso:     number;
}