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
                return 'magia';
            case 'guerreiro':
                return 'espada';  
            case 'monge':
                return 'artes marciais';
            case 'ninja':
                return 'shuriken';
            default:
                return 'um ataque indefinido';
        }
}
    

const heroi1 = new Heroi('pedin', 30, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('leitrox', 150, 'mago');
heroi2.atacar();