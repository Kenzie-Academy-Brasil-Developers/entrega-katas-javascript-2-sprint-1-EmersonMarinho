// comece a criar a sua função add na linha abaixo

function add (x,y){
    let totaladd = x+y;
    return totaladd
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x,y){ 
    let totalmulti = 0 
    for(let i = 0; i<x; i++){
    totalmulti = add(totalmulti,y) 
    }
    return totalmulti
}
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x,n){ 
    let totalpower = x
    for(let i = 1; i<n; i++){
    totalpower = multiply(totalpower,x)
    }
    return totalpower
}

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial (x){
    let totalfactorial = 1
    for (let i = x; i>0; i--){
    totalfactorial = multiply(totalfactorial,i)
    console.log(totalfactorial)
}
    return totalfactorial
}
console.assert(factorial(4) === 24, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
