const helper = (obj,path,value) => {
    const [current, ...rest] = obj;
    if(rest.length > 0){
        
    } else {
        obj[current] = value;
    }

    return obj;
}

const set = (obj, path, value) => {
    if( typeof path === 'string'){
        path = path.replaceAll('[','.').replaceAll(']','').split('.');
    }

    helper(obj, path, value);
}

const obj = {};

// set(obj, 'a[0].b.c', 4);
// console.log(obj.a[0].b.c);

// set(obj, ['x', '0','y', 'z'], 5);
// console.log(obj.x[0].y.z);

// [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
// [9, 1]

const returnNonRep = (arr) => {
    let nonRep = {};
    for(let el of arr){
        if(nonRep[el]){
            nonRep[el] += 1;
        }else{
            nonRep[el] = 1;
        }
    }
    let res = [];
    for (const key in nonRep) {
        if(nonRep[key] == 1){
            res.push(+key);
        }
    }
    return res;
    // console.log(nonRep);
}


console.log(returnNonRep([2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]));



