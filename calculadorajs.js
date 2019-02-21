function main() {

  var calc = {
    num1: null,
    num2: null,
    op: null,
    total: null,
    estado = "init";

    gui = {
      display: document.getElementById('display'),
      digitales: {
        boton1: document.getElementById('boton1'),
        boton2: document.getElementById('boton2'),
        boton3: document.getElementById('boton3'),
        boton4: document.getElementById('boton4'),
        boton5: document.getElementById('boton5'),
        boton6: document.getElementById('boton6'),
        boton7: document.getElementById('boton7'),
        boton8: document.getElementById('boton8'),
        boton9: document.getElementById('boton9'),
        boton0: document.getElementById('boton0'),
      },
      operandos: {
        botonsuma: document.getElementById('botonsuma'),
        botonresta: document.getElementById('botonresta'),
        botonmultiplica: document.getElementById('botonmultiplica'),
        botondivide: document.getElementById('botondivide'),
      },


      botonigual: document.getElementById('botonigual'),
    }
    boton_dig = function(dig){
      if (this.estado = "init"){
        this.gui.display.innerHTML = dig;
        this.estado = "introduciendonum1";
        this.num1 = dig;
      }
      if (this.estado = "introduciendonum1"){
        this.gui.display.innerHTML += dig;
        this.estado = "introduciendonum1";
        this.num1 += dig;
      }
      if (this.estado = "operandointroducido"){
        this.gui.display.innerHTML = dig;
        this.estado = "introduciendonum2";
        this.num2 += dig;
      }
      if (this.estado = "introduciendonum2"){
        this.gui.display.innerHTML += dig;
        this.estado = "introduciendonum2";
        this.num2 += dig;
      }
    }
    boton_op = function(operando){
      if (this.estado = "introduciendonum1"){
        this.gui.display.innerHTML += operando;
        this.estado = "operandointroducido";
        this.op = operando;
      }
    }
    boton_igual = function (igual){
      if (this.estado = "introduciendonum2"){
        this.total = num1 + op + num2;
        this.gui.display.innerHTML = Eval(total);
        this.estado = "init";
      }
    }
  }

  calc.gui.boton1.onclick = () => {
    calc.boton_dig("1");
  }

  boton2.onclick = () => {
    display.innerHTML = boton2.innerHTML
  }


  boton3.onclick = () => {
    display.innerHTML = boton3.innerHTML
  }

  var boton4 = document.getElementById('boton4');
  boton4.onclick = () => {
    display.innerHTML = boton4.innerHTML
  }

  var boton5 = document.getElementById('boton5');
  boton5.onclick = () => {
    display.innerHTML = boton5.innerHTML
  }

  var boton6 = document.getElementById('boton6');
  boton6.onclick = () => {
    display.innerHTML = boton6.innerHTML
  }

  var boton7 = document.getElementById('boton7');
  boton7.onclick = () => {
    display.innerHTML = boton7.innerHTML
  }

  var boton8 = document.getElementById('boton8');
  boton8.onclick = () => {
    display.innerHTML = boton8.innerHTML
  }

  var boton9 = document.getElementById('boton9');
  boton9.onclick = () => {
    display.innerHTML = boton9.innerHTML
  }

  var boton0 = document.getElementById('boton0');
  boton0.onclick = () => {
    display.innerHTML = boton0.innerHTML
  }
  boton_dig(calc,dig)
}
