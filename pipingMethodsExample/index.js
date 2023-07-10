const val = { salary: 430000};

const getSlary = (person) => person.salary;
const addBouns = (netSalary) => netSalary + 120000;
const deduceTax = (grossSalary) => grossSalary - (grossSalary * .3);

const pipe = (...fns) => {
    return (val) => {
        fns.forEach((fn) => {
            val = fn(val);
        })

        return val;
    }
}
const result = pipe(
    getSlary,
    addBouns,
    deduceTax
)(val);

console.log(result);


const obj = {
    a : {
        b: (a,b,c) => a + b + c,
        c: (a,b,c) => a + b - c,
    },
    d: (a,b,c) => a - b - c,
    e: (a,b,c) => a * b * c * 38.5
}

const pipe2 = (obj) => {
    return (...args) => {
       for(let key in obj){
          let val = obj[key];
          if( typeof val === 'function'){
            obj[key] = val(...args);
          } else {
            obj[key] = pipe2(val)(...args);
          }
       } 
        return obj;
    }
}

console.log(pipe2(obj)(1,1,1));
