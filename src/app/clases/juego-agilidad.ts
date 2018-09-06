import { Juego } from '../clases/juego'

export class JuegoAgilidad extends  Juego {
    numeroCalculoUno:number;
    numeroCalculoDos:number;
    operadorCalculo:string;
    numeroIngresado:number;
    resultado:number;
    dificultad:string;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Adivina el número",gano,jugador);
    }
      public verificar() {
          let retorno:boolean;
          if(this.numeroIngresado == this.resultado)
          {
              retorno = true;
          }
          else
          {
              retorno = false;
          }
          this.numeroCalculoDos = 0;
          this.numeroCalculoUno = 0;
          this.numeroIngresado = 0;
          this.operadorCalculo = "Juga De Nuevo";
        return retorno;
     }

     public generarJuego() {
         let max:number;
         let min:number;
         switch(this.dificultad)
         {
             case "Facil":
                max = 10;
                min = 1;
                break;
             case "Normal":
                max = 25;
                min = 10;
                break;
             case "Dificil":
                max = 50;
                min = 25;
                break;
             default:
                this.dificultad = "Facil";
                max = 10;
                min = 1;
                break;

         }
         this.numeroCalculoUno = Math.floor(Math.random() * (max-min) + min);
         this.numeroCalculoDos = Math.floor(Math.random() * (this.numeroCalculoUno -min) + min);
         var operadores = ["+", "-", "*", "/"];
         this.operadorCalculo = operadores[Math.floor(Math.random() * (4 -1) + 1)];
         switch (this.operadorCalculo){
            case "+":
                this.resultado = this.numeroCalculoUno + this.numeroCalculoDos;
                break;
            case "-":
                this.resultado = this.numeroCalculoUno - this.numeroCalculoDos;
                break;
            case "*":
                this.resultado = this.numeroCalculoUno * this.numeroCalculoDos;
                break;
            case "/":
                this.resultado = Math.floor(this.numeroCalculoUno / this.numeroCalculoDos);
                break;
          }
          console.info(this.resultado);
      }
    }