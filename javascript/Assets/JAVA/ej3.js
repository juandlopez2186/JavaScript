let l1;
let l2;
let l3;

l1=parseInt("digite la base del triangulo");
l2=parseInt("digite un lado del triangulo");
l3=parseInt("digite un lado del triangulo");

if (l1!=l2!=l3 || l!=l3!=l2) {
alert("Es un triangulo Escaleno")
}
else if (l1==l2==l3 || l1==l3==l2) {
    alert("Es un triangulo Equilatero")
    }
else if (l1!=l2==l3 || l1!=l3==l2){
    alert("Es un triangulo Isoceles")
    }