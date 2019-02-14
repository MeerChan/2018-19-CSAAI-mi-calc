function main() {
  console.log("hola");

  var boton = document.getElementById('boton');

  boton.onclick = () => {
    console.log("click");

    var display = document.getElementById('display');
    display.innerHTML = " Nuevo texto";
  }
}
