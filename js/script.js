
let combo1 = prompt("Ingrese cantidad de combos 1 que le gustaría comprar");

let combo2 = prompt("Ingrese cantidad de combos 2 que le gustaría comprar");

let combo3 = prompt("Ingrese cantidad de combos 3 que le gustaría comprar");

function sumar (combo1, combo2, combo3){
    return parseInt(combo1) + parseInt(combo2) + parseInt(combo3)
}

let resultado = parseInt(combo1) + parseInt(combo2) + parseInt(combo3);

alert("Quiere llevarse: " + resultado + " combos");
