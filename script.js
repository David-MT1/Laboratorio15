// 3. Seleccionar el primer <h2> y mostrar su texto
const h2 = document.querySelector("h2");
console.log(h2.textContent);

// 4. Cambiar el texto de todos los <p>
const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => p.textContent = "Texto actualizado dinámicamente");

// 5. Cambiar src y alt de la primera imagen
const img = document.querySelector("img");
img.src = "nueva-imagen.jpg";
img.alt = "Imagen cambiada";

// 6. Agregar clase resaltado y quitar oculto a cada <li>
const items = document.querySelectorAll("li");
items.forEach(li => {
    li.classList.add("resaltado");
    li.classList.remove("oculto");
});

// 7. Seleccionar un <ul> por id y mostrar el texto de cada <li>
const lista = document.getElementById("miLista");
for (const li of lista.children) {
    console.log(li.textContent);
}

// 8. Cambiar fondo de cada <div> usando un array de colores
const colores = ["lightblue", "lightgreen", "pink", "yellow", "orange"];
const divs = document.querySelectorAll("div");
divs.forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});

// 9. Crear un nuevo <p> y agregarlo al final del body
const nuevoP = document.createElement("p");
nuevoP.textContent = "Elemento insertado con JS";
document.body.appendChild(nuevoP);
