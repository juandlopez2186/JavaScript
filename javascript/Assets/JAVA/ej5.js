function openModal(shape) {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalForm = document.getElementById("modal-form");
  var result = document.getElementById("result");
  
  if (shape === "circle") {
    modalTitle.textContent = "Círculo";
    modalForm.innerHTML = `
      <label for="input1">Radio:</label>
      <BR>
      <input type="number" id="input1">
      <button type="submit">Resultado</button>
    `;
    modal.addEventListener("submit",(e)=>{
      e.preventDefault
      r=modalForm.input1.value
    r=(2*r)*3.1416
    alert("el resultado es "+r)
    })
  }

    else if (shape === "circle2"){
      modalTitle.textContent = "Círculo";
    modalForm.innerHTML = `
      <label for="input1">Radio:</label>
      <BR>
      <input type="number" id="input1">
      <button type="submit">Resultado</button>
    `;
    modal.addEventListener("submit",(e)=>{
      e.preventDefault
      r=modalForm.input1.value
    r=(r*r)*3.1416
    alert("el resultado es "+r)
    })
    }

   else if (shape === "triangle") {
    modalTitle.textContent = "Triángulo";
    modalForm.innerHTML = `
      <label for="input1">Base:</label>
      <input type="number" id="input1">
      <BR>
      <label for="input2">Lado1:</label>
      <input type="number" id="input2">
      <BR>
      <label for="input3">Lado2:</label>
      <input type="number" id="input3">
      <button type="submit">Resultado</button>
      `;
      modal.addEventListener("submit",(e)=>{
        e.preventDefault
        r=parseInt(modalForm.input1.value)
        r2=parseInt(modalForm.input2.value)
        r3=parseInt(modalForm.input3.value)
      r=r+r2+r3
      alert("el resultado es "+r)
      })
  }
  else if (shape === "triangle2") {
    modalTitle.textContent = "Triángulo";
    modalForm.innerHTML = `
      <label for="input1">Base:</label>
      <input type="number" id="input1">
      <BR>
      <label for="input2">Altura:</label>
      <input type="number" id="input2">
      <button type="submit">Resultado</button>
      `;
      modal.addEventListener("submit",(e)=>{
        e.preventDefault
        r=parseInt(modalForm.input1.value)
        r2=parseInt(modalForm.input2.value)
      r=(r*r2)/2
      alert("el resultado es "+r)
      })
  } 
  else if (shape === "rectangle") {
    modalTitle.textContent = "Rectángulo";
    modalForm.innerHTML = `
      <label for="input1">Largo:</label>
      <input type="number" id="input1">
      <BR>
      <label for="input2">Ancho:</label>
      <input type="number" id="input2">
      <button type="submit">Resultado</button>
    `;
    modal.addEventListener("submit",(e)=>{
      e.preventDefault
      r=parseInt(modalForm.input1.value)
    r2=parseInt(modalForm.input2.value)
    r=(r+r)+(r2+r2)
    alert("el resultado es "+r)
    })
  } 
  else if (shape === "rectangle2") {
    modalTitle.textContent = "Rectángulo";
    modalForm.innerHTML = `
      <label for="input1">Largo:</label>
      <input type="number" id="input1">
      <BR>
      <label for="input2">Ancho:</label>
      <input type="number" id="input2">
      <button type="submit">Resultado</button>
    `;
    modal.addEventListener("submit",(e)=>{
      e.preventDefault
      r=parseInt(modalForm.input1.value)
      r2=parseInt(modalForm.input2.value)
    r=r*r2
    alert("el resultado es "+r)
    })
  }
  else if (shape === "square") {
    modalTitle.textContent = "Cuadrado";
    modalForm.innerHTML = `
      <label for="input1">Lado:</label>
      <input type="number" id="input1">
      <button type="submit">Resultado</button>
    `;
    modal.addEventListener("submit",(e)=>{
      e.preventDefault
      r=modalForm.input1.value
    r=r*4
    alert("el resultado es "+r)
    })
    
  }
  else if (shape === "square2") {
    modalTitle.textContent = "Cuadrado";
    modalForm.innerHTML = `
      <label for="input1">Lado:</label>
      <input type="number" id="input1">
      <button type="submit">Resultado</button>
    `;
    modal.addEventListener("submit",(e)=>{
      e.preventDefault
      r=modalForm.input1.value
    r=r*r
    alert("el resultado es "+r)
    })
    
  }
  
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function calculate() {
  var shape = document.getElementById("modal-title").textContent;
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  var result = document.getElementById("result");
  
  var area, perimeter;
  
  if (shape === "Círculo") {
    perimeter = 2 * Math.PI * input1;
    area = Math.PI * Math.pow(input1, 2);
  } else if (shape === "Triángulo") {
    perimeter = input1 + input2 + Math.sqrt(Math.pow(input1, 2) + Math.pow(input2, 2));
    area = (input1 * input2) / 2;
  } else if (shape === "Rectángulo") {
    perimeter = 2 * (input1 + input2);
    area = input1 * input2;
  } else if (shape === "Cuadrado") {
    perimeter = 4 * input1;
    area = Math.pow(input1, 2);
  }
  
  result.innerHTML = `
    <p>Perímetro: ${perimeter}</p>
    <p>Área: ${area}</p>
  `;
}