export interface AccountListProps { 
    id: number;
    numeroCuenta: string;
    tipoCuenta: string;
    saldoInicial: number;
    saldoActual: number;
    estado: string;
    listaMovimientos: MovementsProps[]

}


export interface MovementsProps {
    id: number;
    fecha: string;
    tipoMovimientoEnum: string;
    valor: number;
    saldo: number;
    estado: string;

}