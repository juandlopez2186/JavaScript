/*click
function handleClick() {
    alert('Hiciste clic 🧛🏻‍♂️❤️🧛🏻‍♀️');
  }*/
  document.getElementById("click").Click = function() {clickfunction()};

  function click() {
    document.getElementById("click")
    alert('¡Hiciste clic en el botón!');
  }



//mouseover
      function handleMouseover(element) {
        element.classList.add('highlight');
      }

      function handleMouseout(element) {
        element.classList.remove('highlight');
      }

//keydown
// Función que se ejecuta cuando se presiona una tecla
function handleKeydown(event) {
    if (event.key === 'Enter') {
      alert('Presionaste la tecla Enter');
    }
  }

//onkeypress
document.getElementById("okp").onkeypress = function() {okpunction()};

function okpunction() {
    document.getElementById("okp").style.backgroundColor = "black";
}

//submit
function handleSubmit(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    alert('Se ha enviado el formulario');
}

//ounload
function ofunction() {
    alert("Que se dice padrecito, tienes ganas de matar o como te sientes!");
}

//blur
function handleBlur() {
    alert('El campo de entrada ha perdido el enfoque');
}

//scroll

function handleScroll() {
var scrollMessage = document.getElementById("scrollMessage");
scrollMessage.style.display = "block";
}

//change
function handleChange() {
    var selectedOption = document.getElementById("mySelect").value;
    alert('Has seleccionado: ' + selectedOption);
}

//resize
function handleResize() {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      alert('La ventana ha sido redimensionada. Ancho: ' + windowWidth + ', Altura: ' + windowHeight);
    }

