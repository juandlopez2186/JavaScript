let op2
let op
let g
op2=parseInt("digite 1 para grados Celsius, 2 para Fahrenheit y 3 para Kelvin")
g=parseFloat("digite los grados")
op=parseInt("digite 1 para convertir a grados Celsius, 2 para Fahrenheit y 3 para Kelvin")
switch (op2) {
    case 1:
        if (op==1 ) {
            print("los grados ${g}")
        } 
        if (op==2 ) {
            g=(g * 9/5) + 32
            print("los grados ${g}") 
        } 
        if (op==3 ) {
            g=g + 273.15
            print("los grados ${g}") 
        } 
        
        break;
    case 2:
        if (op==1 ) {
            g=(g - 32) * 5/9
         print("los grados ${g}")
        } 
     if (op==2 ) {
        print("los grados ${g}")
        }   
     if (op==3 ) {
        g=(g - 32) * 5/9 + 273.15
        print("los grados ${g}")            
            } 
            
            break;
    case 3:
        if (op==1 ) {
            g=g - 273.15
            print("los grados ${g}")
        } 
        if (op==2 ) {
            g=(g - 273.15) * 9/5 + 32
            print("los grados ${g}")
        } 
        if (op==3 ) {
        print("los grados ${g}")
                } 
                
        break;
    default:
        alert("digite un valor valido")
        break;
}
