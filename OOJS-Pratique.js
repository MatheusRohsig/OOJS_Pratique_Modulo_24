function Roupa(marca, valor, tamanho) {
    this.marca = marca;
    this.valor = valor; 
    this.tamanho = tamanho;
}

function RoupaFeminina(marca, valor, tamanho, PecaVestuario, estacao){
    this.PecaVestuario = PecaVestuario;
    this.estacao = estacao;

    Roupa.call(this, marca, valor, tamanho);
}

function RoupaMasculina(marca, valor, tamanho, PecaVestuario, estacao) {
    this.PecaVestuario = PecaVestuario;
    this.estacao = estacao;

    Roupa.call(this, marca, valor, tamanho);
}

const RoupaMasculina1 = new RoupaMasculina("adidas", 100, "adulto", "camiseta", "verão");
const RoupaFeminina1 = new RoupaFeminina("nike", 250, "Adulto", "vestido", "outono");
const RoupaMasculina2 = new RoupaMasculina("umbro", 200, "adulto", "calça", "sem estação")

console.log(RoupaMasculina1);
console.log(RoupaFeminina1);
console.log(RoupaMasculina2);