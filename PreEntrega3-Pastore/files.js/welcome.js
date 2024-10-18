let saldo_usuario = ""
let input = document.querySelector("#name3")

input.addEventListener("change", (e) => {
    saldo_usuario = Number(e.target.value);
    sessionStorage.setItem("saldo", saldo_usuario);
});

let formulario = document.querySelector(".formula2");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    while (isNaN(saldo_usuario)) {
        saldo_usuario = Number(prompt("Intente de nuevo, introduzca un valor numerico válido:"));
        if (!isNaN(saldo_usuario)) {
            sessionStorage.setItem("saldo", saldo_usuario);
            window.location.href = "./barra.html";
            break 
        }
    }
})



