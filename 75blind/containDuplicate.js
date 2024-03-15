// brute force : o(n^2) space : o(1)
// BY SORTING :
// BY OBJECT : hasSet : 

const containDuplicate = (arr) => {
    let obj = new Map();

    for (const key of arr) {
        if(obj.has(key)){
            return true;
        } else{
            obj.set(key,true);
        }
    }

    return false;
}

    console.log(containDuplicate([1,2,3,4,1]));