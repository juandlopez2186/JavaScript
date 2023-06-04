
var n = ["Jeniffer", "Tatiana", "Uldarico", "Jonathan"];
var a = ["Fajardo", "Cabrera", "Hernandez", "Rivera"];
var ac = ["JavaScript", "Java", "Python", "BD"];


function comprobarSeleccion() {
  var ns = document.getElementById("n").value;
  var as = document.getElementById("a").value;
  var acs = document.getElementById("ac").value;
 
  if (
    n[ns] === n[0] &&
    a[as] === a[0] &&
    ac[acs] === ac[0]
  ) 
  {
    alert ("La respuesta es correcta.")
  } 
  else if(
    n[ns] === n[1] &&
    a[as] === a[1] &&
    ac[acs] === ac[1]
  ) 
  {
    alert ("La respuesta es correcta.")
  }
  else if(
    n[ns] === n[2] &&
    a[as] === a[2] &&
    ac[acs] === ac[2]
  ) 
  {
    alert ("La respuesta es correcta.")
  }
  else if(
    n[ns] === n[3] &&
    a[as] === a[3] &&
    ac[acs] === ac[3]
  ) 
  {
    alert ("La respuesta es correcta.")
  }
  else {
    alert ("La respuesta es correcta.")
  }
}