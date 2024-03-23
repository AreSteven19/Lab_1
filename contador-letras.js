let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

let palabras = {};

for (var i = 0; i < par.length; i++) {
    let letra = par[i];
    if (letra !== ' ') { 
        palabras[letra] = (palabras[letra] || 0) + 1;
    }
}

console.log(palabras);
