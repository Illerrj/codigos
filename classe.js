class Mamifero {
    constructor(patas){
        this.especie = 'Mamiferos'
    }
    dormir(){
        alert('Ele dormiu')
    }
}

class Pessoa extends Mamifero {
    constructor(name, idade){
        super(patas);
        this.name = name
        this.idade = idade
        this.cidade = 'Casimiro'
    }

    dormir(){
        super.dormir();
    }

    andou(){
        alert(`${this.name} andou`)
    }
}
const pessoa1 = new Pessoa ('Iller', 42)
