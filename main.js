/*
*********************
*       DOM         *
*********************
*/

//--- ¿QUÉ ES EL MODELO DE OBJETOS DEL DOCUMENTO (DOM) Y CÓMO FUNCIONA? ---//
/*
El Modelo de Objetos del Documento (DOM) es una estructura de objetos generada por el navegador, la cual representa la página HTML actual. 
Con JavaScript la empleamos para acceder y modificar de forma dinámica elementos de la interfaz.
Es decir que, por ejemplo, desde JavaScript podemos modificar el texto contenido de una etiqueta <h1>.
*/

//--- ¿CÓMO FUNCIONA? ---//
/*
La estructura de un documento HTML son las etiquetas.
En el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto, al que podemos llamar nodo. 
Las etiquetas anidadas son llamadas “nodos hijos” de la etiqueta “nodo padre” que las contiene.
Todos estos objetos son accesibles empleando JavaScript mediante el objeto global document.
*/

//--- EDITAR EL DOM DESDE EL NAVEGADOR ---//
/*
Los navegadores modernos brindan medios para editar el DOM de cualquier página en tiempo real. 
Ejemplo: en Chrome podemos hacerlo mediante la Herramienta para desarrolladores en la pestaña “Elements”.
Si bien la estructura DOM está simplificada, es un medio muy útil para verificar y probar actualizaciones en la estructura.
*/

//--- TIPOS DE NODOS ---//
/*
La especificación completa de DOM define 12 tipos de nodos, los más usados son:
-Document: Nodo raíz del que derivan todos los demás nodos del árbol.
-Element: Representa cada una de las etiquetas XHTML. Puede contener atributos y derivar otros nodos de él.
-Attr: Se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.
-Text: Nodo que contiene el texto encerrado por una etiqueta HTML.
-Comment: Representa los comentarios incluidos en la página HTML.
*/

//--- ACCESO AL DOM ---//
//--- ACCEDER A LOS NODOS ---//
/*
Existen distintos métodos para acceder a los elementos del DOM empleando en la clase Document. 
Los mas comunes son:
-getElementById()
-getElementsByClassName()
-getElementsByTagName()
*/
//--- GETELEMENTBYID() ---//
/*
El método getElementById() sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificación. 

//CODIGO HTML DE REFERENCIA
<div id = "app">
<p id = "parrafo1" >Hola Mundo</p>
</div>

//CODIGO JS
let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);
*/

//--- GETELEMENTSBYCLASSNAME() ---//
/*
El método getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias:

//CODIGO HTML DE REFERENCIA
 <ul>
      <li class="paises">AR</li>
      <li class="paises">CL</li>
 	<li class="paises">UY</li>
 </ul>
//CODIGO JS
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
*/

//--- GETELEMENTSBYTAGNAME() ---//
/*
El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Esta opción es la menos específica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML.

//CODIGO HTML DE REFERENCIA
<div>
<div>CONTENEDOR 2</div>
      <div>CONTENEDOR 3</div>
</div>
//CODIGO JS
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);
*/

//--- EJEMPLO APLICADO: RECORRE HTMLCollection CON FOR...OF ---//
// let paises       = document.getElementsByClassName("paises");
// let contenedores = document.getElementsByTagName("div");

// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
//     console.log(div.innerHTML);
// }

//--- MODIFICAR NODOS ---//
//--- INNER TEXT ---//
/*
La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.

//CODIGO HTML DE REFERENCIA
<h1 id=”titulo”>Hola Mundo!</h1>
//CODIGO JS
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = “Hola Coder!”
console.log( titulo.innerText ) // “Hola Coder!”
*/

//--- INNER HTML ---//
/*
innerHTML permite definir el código html interno del elemento seleccionado. El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde un string crear una nueva estructura de etiquetas y contenido. 
Al pasar un string con formato de etiquetas html y contenido a través de la propiedad innerHTML, el navegador genera nuevos nodos con su contenido dentro del elemento seleccionado.

//CODIGO HTML DE REFERENCIA
<div id=”contenedor”></div>
//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2><p>Lorem ipsum</p>”

//Resultado en el DOM
<div id=”contenedor”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>
*/
//01.17.00