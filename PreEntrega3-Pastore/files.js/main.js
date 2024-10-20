// function tragos(trago, saldo_usuario) {
//     alert(`Compraste un/una ${trago} Te quedan $${saldo_usuario}`)
// }

// function tragos_saldo_insuf(trago) {
//     alert(`No tenes suficiente saldo para comprar ${trago}`)
// }

// const compra_saldo_tragos = (valor, saldo_usuario) => saldo_usuario - valor;

// function retry(vrble, ambito) {
//     vrble = Number(prompt(`Intente de nuevo, ${ambito} porfavor`))
//     return Number(vrble)
// }

// function retry_si_no(ambito, vrble) {
//     vrble = prompt(`Intente de nuevo,${ambito} responda si/no por favor`).toLowerCase();
//     return vrble.toLowerCase()
// }

// function conf_compra(trago, contains) {
//     let confirmacion = confirm(`Realmente deseas comprar ${trago} trago?, esta bebida ${contains} alcohol.`)
//     return confirmacion;
// }

// function cancel(trago) {
//     alert(`Has cancelado la compra de ${trago}`);
// }


// class Trago {
//     constructor(bebida, precio) {
//         this.bebida = bebida
//         this.precio = precio
//     }
// }

// let cerveza = new Trago("Lata de Cerveza", 2500);
// let fernet = new Trago("Fernet con Coca-cola", 2300);
// let vino = new Trago("Copa de Vino", 5000);
// let coca_cola = new Trago("Lata de Coca-cola", 2000);
// let agua = new Trago("Botella de Agua", 1800);





// DOM //

let nombre_cliente = ""
let input_name = document.querySelector("#name")

input_name.addEventListener("change", (e) => {
    nombre_cliente = (e.target.value)
    sessionStorage.setItem("nombre", nombre_cliente)
})

let formulario_name = document.querySelector(".formula")

let mensaje = document.createElement("p")
mensaje.textContent = "Intente de nuevo, Introduzca su nombre por favor."
mensaje.style.color = "red"
mensaje.style.display = "none"
document.querySelector(".formula").appendChild(mensaje)

let mensaje_mostrado = false

formulario_name.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!isNaN(nombre_cliente)){
        mensaje.style.display = "block"
        mensaje_mostrado = true

    }else{
        mensaje.style.display = "none"
        window.location.href = "./entrada2.html"
    }
})

        // if (edad_cliente >= 18) {
        //     alert("Bienvenido al bar " + nombre_cliente + "!")

        //     let saldo_usuario = Number(prompt("Ingrese cuanto dinero porta"))

        //     while (isNaN(saldo_usuario)) {
        //         saldo_usuario = retry("introduzca cuanto dinero porta", saldo_usuario)
        //     }

        //     let ingreso = prompt("La entrada tiene un valor de $2000, desea entrar? si/no").toLowerCase()

        //     while (ingreso !== "si" && ingreso !== "no") {
        //         ingreso = retry_si_no("¿desea entrar?", ingreso)
        //     }

        //     if (saldo_usuario >= 2000 && ingreso == "si") {

        //         saldo_usuario = saldo_usuario - 2000
        //         alert("Entraste al bar, te quedan $" + saldo_usuario)

        //         let consumicion = prompt("Llegaste a la barra del bar, deseas consumir algo? si/no").toLowerCase()

        //         while (consumicion !== "si" && consumicion !== "no") {
        //             consumicion = retry_si_no("¿deseas consumir algo?", consumicion)
        //         }

        //         if (consumicion === "si") {

        //             let seguir_comprando = true

        //             while (seguir_comprando) {
        //                 let compra_trago = Number(prompt(
        //                     `Elija su trago: 
        //                 1.🍺Lata de Cerveza $2500 
        //                 2.🥤Vaso de fernet $3200 
        //                 3.🍷Copa de vino $5000
        //                 Bebidas sin alcohol: 
        //                 4.🧃Lata de Coca-cola $2000 
        //                 5.💦Botella de agua sin gas $1800 
        //                 6.❗Salir de la barra 
        //                 Introduzca el numero del trago/bebida a consumir 
        //                 Saldo de ${nombre_cliente}: $${saldo_usuario}💵.`))
        //                 switch (compra_trago) {
        //                     case 1:
        //                         if (saldo_usuario >= cerveza.precio) {
        //                             if (conf_compra("cerveza", "contiene")) {
        //                                 saldo_usuario = compra_saldo_tragos(cerveza.precio, saldo_usuario);
        //                                 tragos("lata de cerveza", saldo_usuario);
        //                             } else {
        //                                 cancel("cerveza")
        //                             }
        //                         } else {
        //                             tragos_saldo_insuf("lata de cerveza");
        //                         }
        //                         break;
        //                     case 2:
        //                         if (saldo_usuario >= fernet.precio) {
        //                             if (conf_compra("vaso de fernet", "contiene")) {
        //                                 saldo_usuario = compra_saldo_tragos(fernet.precio, saldo_usuario);
        //                                 tragos("vaso de fernet", saldo_usuario)
        //                             } else {
        //                                 cancel("vaso de fernet")
        //                             }
        //                         } else {
        //                             tragos_saldo_insuf("vaso de fernet")
        //                         }
        //                         break;
        //                     case 3:
        //                         if (saldo_usuario >= vino.precio) {
        //                             if (conf_compra("copa de vino", "contiene")) {
        //                                 saldo_usuario = compra_saldo_tragos(vino.precio, saldo_usuario);
        //                                 tragos("copa de vino", saldo_usuario)
        //                             } else {
        //                                 cancel("copa de vino")
        //                             }
        //                         } else {
        //                             tragos_saldo_insuf("copa de vino")
        //                         }
        //                         break;
        //                     case 4:
        //                         if (saldo_usuario >= coca_cola.precio) {
        //                             if (conf_compra("lata de Coca-cola", "no contiene")) {
        //                                 saldo_usuario = compra_saldo_tragos(coca_cola.precio, saldo_usuario);
        //                                 tragos("lata de Coca-cola", saldo_usuario)
        //                             } else {
        //                                 cancel("lata de Coca-cola")
        //                             }
        //                         } else {
        //                             tragos_saldo_insuf("lata de Coca-cola")
        //                         }
        //                         break;
        //                     case 5:
        //                         if (saldo_usuario >= agua.precio) {
        //                             if (conf_compra("botella de agua sin gas", "no contiene")) {
        //                                 saldo_usuario = compra_saldo_tragos(agua.precio, saldo_usuario);
        //                                 tragos("botella de agua sin gas", saldo_usuario)
        //                             } else {
        //                                 cancel("botella de agua sin gas")
        //                             }
        //                         } else {
        //                             tragos_saldo_insuf("botella de agua sin gas")
        //                         }
        //                         break;
        //                     case 6:
        //                         alert("Decidiste salir de la barra, disfruta del bar")
        //                         seguir_comprando = false
        //                         break;
        //                     default:
        //                         alert("No introdujiste una opcion valida")

        //                 }
        //             }




        //         } else {

        //             if (consumicion === "no") {
        //                 alert("Decidiste no consumir nada. ¡Disfruta del bar sin tu bebida!💃🎶")
        //             }
        //         }

        //     } else {
        //         alert("No te alcanza para pagar la entrada/Decidiste no entrar al bar")
        //     }


        // } else {
        //     alert("Solo los mayores de 18 años tienen premitido el ingreso, lo esperamos cuando sea mayor de edad")
        // }

        // usar_programa = confirm("¿Quieres volver a usar el programa?");
    






