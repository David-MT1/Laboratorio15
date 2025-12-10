const ejer3 = document.querySelector("h2");
console.log(ejer3);
/*
const ejer4 = document.querySelectorAll("p");
ejer4.forEach(n =>{
    n.textContent = "texto actualizado";
})*/
const img = document.querySelector("img");
const btnImg = document.getElementById("btnImg");

btnImg.addEventListener("click", ()=>{
img.setAttribute("src", "https://bookingmaze.com/wp-content/uploads/2025/05/IMGWOA-600x375.jpg")
img.setAttribute("alt", "img ejercicio")

});

const ejer5 = document.getElementById("ejer5");
const lis = document.querySelectorAll("li");
const oculto = document.getElementsByClassName("oculto")

ejer5.addEventListener("click", (e)=>{
    e.preventDefault();
    lis.forEach(li=>{
        li.classList.remove("oculto");
        li.classList.add("resaltado");
    })

})

const ejer7 = document.getElementById("ejer7");
ejer7.addEventListener("click", (e)=>{
    e.preventDefault();
    const lis = document.getElementsByClassName("resaltado");
    for (const n of lis) {  
        console.log(n);
    }
});

const ejer8 = document.getElementById("ejer8");
const divs = document.querySelectorAll("div");
ejer8.addEventListener("click", ()=>{
    divs.forEach(n => {
        const color = Math.floor(Math.random()*900)+100;
        n.style.backgroundColor = `#${color}`;
    });
})

const nuevoP = document.createElement("p");
const ejer9 = document.getElementById("ejer9");
ejer9.addEventListener("click", ()=>{
    nuevoP.textContent = "nuevo p agregado con js";
    document.body.appendChild(nuevoP);
} );


const ejer10 = document.getElementById("ejer10");
const elemetH3 = document.createElement("h3");
const ps = document.querySelectorAll("p");
ejer10.addEventListener("click", ()=>{
    elemetH3.textContent = "este es un h3 añadido";
    ps[0].before(elemetH3);
})


const ejer11 = document.getElementById("ejer11");
const seccion11 = document.getElementById("seccion11");
ejer11.addEventListener("click", ()=>{
    const ul = document.createElement("ul");
    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li");
        li.textContent= "jiji";
        ul.appendChild(li);
    }
    seccion11.appendChild(ul)
});


const parrafo = document.querySelector("p");
const ejer12 = document.getElementById("ejer12");
ejer12.addEventListener("click", ()=>{
    parrafo.innerHTML = 
    `<div>
        <h1>ESTE ES EL REEMPLAZO DEL PARRAFO</h1>
        </div>
    `
});

const ejer13 = document.getElementById("ejer13");

ejer13.addEventListener("click", () => {
    const ps = document.querySelectorAll("p");
    const ultimoP = ps[ps.length - 1];

    ultimoP.remove();
});


const ejer14 = document.getElementById("ejer14");
const contenedor = document.getElementById("contenedor");

ejer14.addEventListener("click", () => {
    contenedor.innerHTML = "";
});

const ejer15 = document.getElementById("ejer15");
ejer15.addEventListener("click", ()=>{
    const art = document.querySelector("article");
    const clone = art.cloneNode(true);
    document.body.appendChild(clone);
});

const primerUl = document.querySelectorAll("ul");
const ejer16 = document.getElementById("ejer16");

ejer16.addEventListener("click", ()=>{
    let ultimoLi = primerUl[0].lastElementChild.textContent;
    let primerLi = primerUl[0].firstElementChild.textContent

    primerUl[0].firstElementChild.textContent=ultimoLi;
    primerUl[0].lastElementChild.textContent=primerLi
})

const ejer17 = document.getElementById("ejer17");
const div17 = document.getElementById("div17");

ejer17.addEventListener("click", () => {
    const parrafos = Array.from(div17.children);

    parrafos.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
    );

    parrafos.forEach(p => {
        div17.appendChild(p);
    });
});


const seccion18 = document.querySelectorAll("section");
const secciones = Array.from(seccion18);
secciones.forEach((seccion, index)=>{
    seccion.setAttribute("data-index", index)
});


const nodos = document.createElement("p");
const div19 = document.querySelectorAll("div");

const arregloDivs = Array.from(div19);
nodos.textContent =`hay ${arregloDivs.length+1} nodos tipo div`
document.body.appendChild(nodos)


const ejer20 = document.getElementById("ejer20");
const ul20 = document.createElement("ul");

ejer20.addEventListener("click", ()=>{
for (let i = 0; i < 5; i++) {
    const li = document.createElement("li")
    const span = document.createElement("span");
    span.textContent = "nivel interno"
    li.appendChild(span);
    ul20.appendChild(li)
}
document.body.appendChild(ul20)
});

const div21 = document.createElement("div");
for (let i = 0; i < 3; i++) {
    const p21 = document.createElement("p");
    p21.textContent = "jijijij"
    div21.appendChild(p21);
    
}
    div21.children[1].remove();
    document.body.appendChild(div21);

const seccion22 = document.createElement("section");
const h22 = document.createElement("h2");
h22.textContent = "titulonuevo"
seccion22.appendChild(h22);

const descrip = document.createElement("p");
descrip.textContent = "descripciongenerada"
seccion22.appendChild(descrip);

const ul22 = document.createElement("ul")
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li")
    li.textContent = "item "+i;   
    ul22.appendChild(li);
}
h22.remove();

seccion22.appendChild(ul22)
document.body.appendChild(seccion22);
