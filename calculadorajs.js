function main() {

  var calc = {
    num1: null,
    num2: null,
    op: null,
    total: null,
    estado = "init",

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
    },
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
    },
    boton_op = function(operando){
      if (this.estado = "introduciendonum1"){
        this.gui.display.innerHTML += operando;
        this.estado = "operandointroducido";
        this.op = operando;
        }
    },
    boton_igual = function (igual){
      if (this.estado = "introduciendonum2"){
        this.total = num1 + op + num2;
        this.gui.display.innerHTML = Eval(total);
        this.estado = "init";
      }
    },
  },

  calc.gui.digitales.boton1.onclick = () => {
    calc.boton_dig("1");
  },
  calc.gui.digitales.boton2.onclick = () => {
    calc.boton_dig("2");
  },
  calc.gui.digitales.boton3.onclick = () => {
    calc.boton_dig("3");
  },
  calc.gui.digitales.boton4.onclick = () => {
    calc.boton_dig("4");
  },
  calc.gui.digitales.boton5.onclick = () => {
    calc.boton_dig("5");
  },
  calc.gui.digitales.boton6.onclick = () => {
    calc.boton_dig("6");
  },
  calc.gui.digitales.boton7.onclick = () => {
    calc.boton_dig("7");
  },
  calc.gui.digitales.boton8.onclick = () => {
    calc.boton_dig("8");
  },
  calc.gui.digitales.boton9.onclick = () => {
    calc.boton_dig("9");
  },

  calc.gui.operandos.botonsuma.onclick = () => {
    calc.boton_op("+");
  },
  calc.gui.operandos.botonresta.onclick = () => {
    calc.boton_op("-");
  },
  calc.gui.operandos.botonmultiplica.onclick = () => {
    calc.boton_op("*");
  },
  calc.gui.operandos.botondivide.onclick = () => {
    calc.boton_op("/");
  },

  calc.gui.boton_igual.onclick = () => {
    calc.boton_igual("=");
  },
}
