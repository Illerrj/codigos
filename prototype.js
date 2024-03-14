function Game(){
    this.pulou = () => alert('Ele pulou');
    this.deitou = () => alert('Ele deitou');
}
Game.prototype.correu = () => alert('Ele correu');

const novoJogo = new Game();

const meuJogo = 'fifa'

console.log(meuJogo.toUpperCase())