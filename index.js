class hero{
    constructor(nome, idade, tipo, ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo 
    this.ataque = ataque
    }

    atacar(){
        
        switch (this.tipo){
        
        case "Mago":
            this.ataque = "Magia"
            console.log("o " + this.tipo + " atacou usando " + this.ataque)
            break

        case "Guerreiro":
            this.ataque = "Espada"
            console.log("o " + this.tipo + " atacou usando " + this.ataque)
            break
         
        case "Monge":
            this.ataque = "Arte Macial"
            console.log("o " + this.tipo + " atacou usando " + this.ataque)
            break
            

        case "Ninja":
            this.ataque = "Shuriken"
           console.log("o " + this.tipo + " atacou usando " + this.ataque)
           break

        }

    }
  
}

let Lucas = new hero("Lucas", 20, "Ninja")

Lucas.atacar()