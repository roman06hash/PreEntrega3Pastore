let edad_cliente = ""
let input_edad = document.querySelector("#name2")

input_edad.addEventListener("change", (e) => {
    edad_cliente = Number(e.target.value);
    sessionStorage.setItem("edad", edad_cliente);
});

let formulario_edad = document.querySelector(".formula2");

formulario_edad.addEventListener("submit", (e) => {
    e.preventDefault();
    while (isNaN(edad_cliente) || edad_cliente > 10000) {
        edad_cliente = Number(prompt("Intente de nuevo, introduzca su edad por favor:"));
        if (!isNaN(edad_cliente) && edad_cliente >= 18 && edad_cliente <= 10000) {
            sessionStorage.setItem("edad", edad_cliente);
            window.location.href = "./welcome.html";
            break 
        }
    }

    while(edad_cliente < 18){
        alert("Solo los mayores de 18 años tienen premitido el ingreso, lo esperamos cuando sea mayor de edad")
        window.location.href = "/index.html";
        break
    }

    if(!isNaN(edad_cliente) && edad_cliente >= 18 && edad_cliente <= 10000){
        sessionStorage.setItem("edad", edad_cliente);
        window.location.href = "./welcome.html";
    }
});





