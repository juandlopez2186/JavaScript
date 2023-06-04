let form=document.getElementById("registrationform")
let fe1=document.querySelector("#e1 .feedback")
let fe2=document.querySelector("#e2 .feedback")
let fe3=document.querySelector("#e3 .feedback")
let fe4=document.querySelector("#e4 .feedback")
let fe5=document.querySelector("#e5 .feedback")
const $number=/^[0-9]{1,15}/
const $text=/^[A-Z a-záÁñÑ]{1,50}/
const $email=/^[A-Z a-záÁñÑ@]{1,50}$@misena.edu.co/

form.numerodocumento.addEventListener("input",(e)=>{
    e.preventDefault();
    if($number.test(e.target.value)){
    form.numerodocumento.setAttribute("class","success")  
        fe1.style.setProperty("opacity","1")
        fe1.style.setProperty("visibility","hidden")
    }
    else{
        form.numerodocumento.setAttribute("class","error")
        fe1.textContent("la longitud minima es de uno")
        fe1.style.setProperty("opacity","1")
        fe1.style.setProperty("visibility","visible")
    }
})
form.nombre.addEventListener("input",(e)=>{
    e.preventDefault();
    if ($text.test(e.target.value)) {
        form.nombre.setAttribute("class","success")  
        fe2.style.setProperty("opacity","1")
        fe2.style.setProperty("visibility","hidden")  
    } else {
        form.nombre.setAttribute("class","error")
        fe2.textContent("la longitud minima es de uno")
        fe2.style.setProperty("opacity","1")
        fe2.style.setProperty("visibility","visible")
    }
})
form.apellido.addEventListener("input",(e)=>{
    e.preventDefault();
    if ($text.test(e.target.value)) {
        form.apellido.setAttribute("class","success")  
        fe3.style.setProperty("opacity","1")
        fe3.style.setProperty("visibility","hidden")  
    } else {
        form.apellido.setAttribute("class","error")
        fe3.textContent("la longitud minima es de uno")
        fe3.style.setProperty("opacity","1")
        fe3.style.setProperty("visibility","visible")
    }
})
form.fechanacimiento.addEventListener("input",(e)=>{
    e.preventDefault();
    if ($number.test(e.target.value)) {
        form.fechanacimiento.setAttribute("class","success")  
        fe4.style.setProperty("opacity","1")
        fe4.style.setProperty("visibility","hidden")  
    } else {
        form.fechanacimiento.setAttribute("class","error")
        fe4.textContent("la longitud minima es de uno")
        fe4.style.setProperty("opacity","1")
        fe4.style.setProperty("visibility","visible")
    }
})
form.correoelectronico.addEventListener("input",(e)=>{
    e.preventDefault();
    if($email.test(e.target.value)){
    form.correoelectronico.setAttribute("class","success")  
        fe5.style.setProperty("opacity","1")
        fe5.style.setProperty("visibility","hidden")
    }
    else{
        form.correoelectronico.setAttribute("class","error")
        fe5.textContent("la longitud minima es de uno")
        fe5.style.setProperty("opacity","1")
        fe5.style.setProperty("visibility","visible")
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const noDoc=form.numerodocumento.value;
    if (noDoc==null || noDoc==0) {
        alert("Debe colocar algun valor")
        form.numerodocumento.focus();
        form.numerodocumento.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre=form.nombre.value;
    if (nombre==null || nombre==0) {
        alert("Debe colocar algun valor")
        form.nombre.focus();
        form.nombre.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const apellido=form.apellido.value;
    if (apellido==null || apellido==0) {
        alert("Debe colocar algun valor")
        form.apellido.focus();
        form.apellido.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fechanacimiento=form.fechanacimiento.value;
    if (fechanacimiento==null || fechanacimiento==0) {
        alert("Debe colocar algun valor")
        form.fechanacimiento.focus();
        form.fechanacimiento.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=form.correoelectronico.value;
    if (email==null || email==0) {
        alert("Debe colocar algun valor")
        form.correoelectronico.focus();
        form.correoelectronico.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const password=form.password.value;
    if (password==null || password==0) {
        alert("Debe colocar algun valor")
        form.password.focus();
        form.password.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const password=form.password.value
    const comprobarpassword=form.comprobarpassword.value;
    if (comprobarpassword==password) {
        alert("Debe colocar algun valor")
        form.comprobarpassword.focus();
        form.comprobarpassword.setAttribute("class","error")
    } else  {
        form.onsubmit()
        alert("datos enviados ")
        
    }
})
