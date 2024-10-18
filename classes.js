// Classe de construção do herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //método para atacar
    atacar() {
        let ataque;
        //filtro do tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        //Mensagem de saída
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Saídas:
const heroi1 = new Heroi('Harry Potter', 18, 'mago');
heroi1.atacar(); // Exibe: o mago atacou usando magia

const heroi2 = new Heroi('He-man', 40, 'guerreiro');
heroi2.atacar(); // Exibe: o guerreiro atacou usando espada

const heroi3 = new Heroi('Aang', 112, 'monge');
heroi3.atacar(); // Exibe: o monge atacou usando artes marciais

const heroi4 = new Heroi('Scorpion', 32, 'ninja');
heroi4.atacar(); // Exibe: o ninja atacou usando shuriken
