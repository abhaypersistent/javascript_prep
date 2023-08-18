let obj = {
    i : 0
}

obj = new Proxy(obj, {
    get: (target, property) => {
        if(property === 'i'){
            target[property] = target[property] + 1;
            return target[property];
        }
    },
    set: (target, property, value) => {
        if(property === 'j'){
            if(value > 10){
                target[property] = value;
            }else{
                throw RangeError("Value should be greater than 10");
            }
        }
        return target[property];
    }
})

console.log(obj.i)
console.log(obj.i)
console.log(obj.i)
console.log(obj.i)
console.log(obj.i)

let obj1 = {
    j : 9
}

obj.j = 9;

