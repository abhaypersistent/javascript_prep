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

set(obj, 'a[0].b.c', 4);
console.log(obj.a[0].b.c);

set(obj, ['x', '0','y', 'z'], 5);
console.log(obj.x[0].y.z);


