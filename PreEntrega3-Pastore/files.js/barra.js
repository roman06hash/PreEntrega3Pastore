class Trago {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 0
    }
}

let lista = [
    new Trago("Lata de Cerveza", 2500),
    new Trago("Fernet con Coca-cola", 2300),
    new Trago("Copa de Vino", 5000),
    new Trago("Lata de Coca-cola", 2000),
    new Trago("Botella de Agua", 1800),
];

let saldoDisplay = document.querySelector(".p_barra")

window.addEventListener("DOMContentLoaded", () => {
    let saldo_usuario = sessionStorage.getItem("saldo");
    saldoDisplay.innerHTML = saldoDisplay.innerHTML.replace("(Saldo)", saldo_usuario)
});

const listTragos = document.querySelector("#lista")
const listSeleccion = document.querySelector("#carrito")

let carrito = {}

const actualizarCarrito = () => {
    const encabezado = document.createElement("h3")
    encabezado.textContent = "Tragos seleccionados (Carrito):"
    
    listSeleccion.innerHTML = ""; 
    listSeleccion.appendChild(encabezado);
    listSeleccion.appendChild(btnReiniciar);

    let total = 0;
    
    for (const [nombre, { cantidad, precio }] of Object.entries(carrito)) {
        const item = document.createElement("p")
        item.textContent = `${nombre} x${cantidad} - $${precio * cantidad}`;
        listSeleccion.append(item);
        total += precio * cantidad;
    }

    const totalElement = document.createElement("p")
    totalElement.textContent = `Total: $${total}`
    listSeleccion.append(totalElement)
};

const addSeleccion = (trago) => {
    if (carrito[trago.nombre]) {
        carrito[trago.nombre].cantidad++
    } else {
        carrito[trago.nombre] = { ...trago, cantidad: 1 }
    }

    actualizarCarrito()
};

const reiniciarCarrito = () => {
    carrito = {}
    actualizarCarrito();
}

lista.forEach((trago) => {
    const btn = document.createElement("button")
    btn.textContent = `${trago.nombre} - $${trago.precio}`
    btn.className = "btn-trago"

    btn.addEventListener("click", () => addSeleccion(trago))

    listTragos.append(btn)
});

const btnReiniciar = document.createElement("button")
btnReiniciar.textContent = "Reiniciar Carrito"
btnReiniciar.className = "btn-reiniciar"

btnReiniciar.addEventListener("click", reiniciarCarrito)

const encabezado = document.createElement("h3")
encabezado.textContent = "Tragos seleccionados (Carrito):"
listSeleccion.appendChild(encabezado)
listSeleccion.appendChild(btnReiniciar)
