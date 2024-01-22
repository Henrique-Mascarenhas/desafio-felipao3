class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque = tipoDeAtaque(this.tipo);
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
     
function tipoDeAtaque(tipo) {
    switch (tipo) {
            case 'mago':
                return 'usou magia';
            case 'guerreiro':
                return 'usou espada';  
            case 'monge':
                return 'usou artes marciais';
            case 'ninja':
                return 'usou shuriken';
            default:
                return 'usou um ataque indefinido';
        }
}
    

const heroi1 = new Heroi('pedin', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('leitrox', 150, 'mago');
heroi2.atacar();