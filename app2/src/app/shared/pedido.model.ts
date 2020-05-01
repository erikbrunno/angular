export class Pedido {
    
    constructor(
        public endereco: string, 
        public numero: number, 
        public complemento: string, 
        public formaPagamento: string
    ) { }
}