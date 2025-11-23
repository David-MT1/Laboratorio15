// 3
let h2 = document.querySelector("h2");
console.log(h2.textContent);

// 4
let ps = document.querySelectorAll("p");
ps.forEach(p => p.textContent = "Texto actualizado dinámicamente");

// 5
let img = document.querySelector("#imagen1");
img.src = "https://via.placeholder.com/200x150?text=Actualizado";
img.alt = "Imagen cambiada";

// 6
let lis = document.querySelectorAll("li");
lis.forEach(li => {
    li.classList.add("resaltado");
    li.classList.remove("oculto");
});

// 7
let ul = document.getElementById("lista1");
for (let li of ul.children) {
    console.log(li.textContent);
}

// 8
let divs = document.querySelectorAll("div");
let colores = ["lightblue", "lightgreen", "lightpink", "lightgray"];
divs.forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});

// 9
let nuevoP = document.createElement("p");
nuevoP.textContent = "Elemento insertado con JS";
document.body.appendChild(nuevoP);

// 10
let primerP = document.querySelector("p");
let h3 = document.createElement("h3");
h3.textContent = "Nuevo H3 insertado";
primerP.before(h3);

// 11
let listaNueva = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Elemento " + i;
    listaNueva.appendChild(li);
}
document.querySelector("section").appendChild(listaNueva);

// 12
let pReemplazar = document.querySelector("p");
let divNuevo = document.createElement("div");
divNuevo.textContent = "Párrafo reemplazado";
pReemplazar.replaceWith(divNuevo);

// 13
let todosP2 = document.querySelectorAll("p");
if (todosP2.length > 0) {
    todosP2[todosP2.length - 1].remove();
}

// 14
let contenido = document.getElementById("contenido");
contenido.innerHTML = "";

// 15
let primerArticle = document.querySelector("main article");
let clon = primerArticle.cloneNode(true);
document.querySelector("main").appendChild(clon);

// 16
let primerUl = document.querySelector("ul");
let ultimoLi = primerUl.lastElementChild;
primerUl.insertBefore(ultimoLi, primerUl.firstElementChild);

// 17
let article = document.querySelector("article");
let pOrdenar = Array.from(article.querySelectorAll("p"));
pOrdenar.sort((a, b) => a.textContent.localeCompare(b.textContent));
pOrdenar.forEach(p => article.appendChild(p));

// 18
let sections = document.querySelectorAll("section");
sections.forEach((sec, i) => sec.dataset.index = i + 1);

// 19
let totalDivs = document.querySelectorAll("div").length;
let pDivs = document.createElement("p");
pDivs.textContent = "Cantidad de divs: " + totalDivs;
document.body.appendChild(pDivs);

// 20
let ulInterna = document.createElement("ul");
for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = "Nivel interno";
    li.appendChild(span);
    ulInterna.appendChild(li);
}
document.body.appendChild(ulInterna);

// 21
let cont = document.getElementById("contenedor");
for (let i = 1; i <= 3; i++) {
    let p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    cont.appendChild(p);
}
cont.children[1].remove();

// 22
let sec = document.querySelector("section");
let h2Nuevo = document.createElement("h2");
h2Nuevo.textContent = "Título nuevo";
sec.appendChild(h2Nuevo);

let pDesc = document.createElement("p");
pDesc.textContent = "Descripción generada";
sec.appendChild(pDesc);

let ul3 = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = "Ítem " + i;
    ul3.appendChild(li);
}
sec.appendChild(ul3);

let h2Original = sec.querySelector("h2");
if (h2Original && h2Original !== h2Nuevo) {
    h2Original.remove();
}
