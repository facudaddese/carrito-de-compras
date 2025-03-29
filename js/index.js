const add = document.querySelectorAll("[id='agregar']");
const view = document.getElementById("ver");
const empty = document.getElementById("vaciar");
const modal = document.getElementById("modal");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const close = document.getElementById("cerrar");

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
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(precio => {
        let item = document.createElement("li");
        item.textContent = "Producto: $" + precio;
        listaCarrito.appendChild(item);
        total += precio;
    });

    totalCarrito.textContent = "Total: $" + total;
    modal.style.display = "block";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

empty.addEventListener("click", () => {
    cantProductos = 0;
    carrito = [];

    alert("Se vació el carrito.");
})
