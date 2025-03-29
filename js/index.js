const add = document.querySelectorAll("[id='agregar']");
const view = document.getElementById("ver");
const empty = document.getElementById("vaciar");

let cantProductos = 0;
let carrito = [];

add.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("Producto agregado con éxito");
        const priceTxt = boton.parentElement.querySelector("h4").textContent;
        const price = parseInt(priceTxt.replace("$", "").replace(".", ""));

        carrito.push(price);
        cantProductos++;
    });
});

view.addEventListener("click", () => {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i];
    }

    alert("Productos: " + cantProductos + "\nTotal: $" + total);
})

empty.addEventListener("click", () => {
    cantProductos = 0;
    carrito = [];

    alert("Se vació el carrito.");
})
