const obj = {
    a: {
        b : {
            c : [1,2,3,4,5,65]
        }
    }
};

function getObj(obj, stringValue){
    // console.log(stringValue.split('.'));
    if(!stringValue || stringValue.length === 0){
        return undefined;
    }

    const excludeChar = ['[',']','.' ];

    const keys = [];
    for (let i = 0; i < stringValue.length; i++) {
        if(!excludeChar.includes(stringValue[i])){
            keys.push(stringValue[i]);
        }
    }

    let value = keys.reduce((obj, key) => {
        return obj[key];
    }, obj)

    return value;
    // let newstr = stringValue.split('.');

    // if(obj[newstr[0]]){
    //     getObj(obj[newstr[0]],newstr.splice(0,1).join('.'));
    // }

    // console.log(obj)
}


console.log(getObj(obj, 'a.b.c'));
console.log(getObj(obj, 'a.b.c.0'));
console.log(getObj(obj, 'a.b.c[1]'));
console.log(getObj(obj, ['a','b','c','2']));
console.log(getObj(obj, 'a.b.c[3]'));
console.log(getObj(obj, 'a.c'));
