// No cambies los nombres de las funciones.

const ParserInline = require("markdown-it/lib/parser_inline");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let keys= Object.keys(objeto);
  let key = [];

  let u=0;

  for(var j in objeto){
    let k = [];
    k.push(keys[u]);
    k.push(objeto[keys[u]]);
    key.push(k);
    u++;
  }

  return key;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let n = string.split("");

  let obj = {};

  for(let i=0;i<n.length;i++){
    let f=n[i];
    let p=0;
    for(let j=0;j<n.length;j++){
      if(f===n[j]){
        p++;
      }
    }
    obj[f]=p;
  }

  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let f='', g='';

  for(let i=0;i<s.length;i++){
    if(s[i]!==s[i].toLowerCase()){
      f+=s[i];
    }else{
      g+=s[i];
    }
  }

  f+=g;

  return f;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let s = str.split(" ");

  let h = [];

  let r = "";

  for(let i=0;i<s.length;i++){
    let a = [];
    let p = "";
    for(let j=s[i].length-1;j>=0;j--){
      a.push(s[i][j]);
    }
    for(let v=0;v<a.length;v++){
      p+=a[v];
    }
    h.push(p);
  }

  r=h[0];

  for(let o=1;o<h.length;o++){
    r+=" "+h[o];
  }

  return r;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let n = String(numero);
  let s = "";

  for(let i=n.length-1;i>=0;i--){
    s += n[i];
  }
  if(n == s){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let g = "";

  for(let i=0;i<cadena.length;i++){
    if((cadena[i]==="c")||(cadena[i]==="b")||(cadena[i]==="a")){
      g+="";
    }else{
      g+=cadena[i];
    }
  }

  return g;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let aux;

  for(let i=0;i<arr.length;i++){
    let menor=i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j].length<arr[menor].length){
        menor=j;
      }
    }
    aux=arr[i];
    arr[i]=arr[menor];
    arr[menor]=aux;
  }

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr = [];

  for(let i=0;i<arreglo1.length;i++){
    for(let j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        arr.push(arreglo1[i]);
      }
    }
  }

  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

