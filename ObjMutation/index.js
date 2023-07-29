const obj = {
    a : 10
}

function deepSeal(obj){
    for(let key in obj){
        let val = obj[key];
        if(typeof val === 'object'){
            deepSeal(val)
        }
    }
    return Object.seal(obj);
}

function deepFreeze(obj){
    for(let key in obj){
        let val = obj[key];
        if(typeof val === 'object'){
            deepFreeze(val)
        }
    }
    return Object.freeze(obj);
}

// function random(obj){
//     obj.a = 20;
// }

// // random(obj);
// random({...obj});
// console.log(obj.a);

// restrict mutation
// obj.seal  on nested it will not work
