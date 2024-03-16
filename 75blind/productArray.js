// product of an array itself
// division method means we will total the sum and after that
// we will simply divide by the indivual number to get the answer
// example : [1,2,3,4]
// output : [24, 12, 8,6]


// use prefix and postfix using same array

// o(n)
const productItselArray = (arr) => {
    let res = new Array(arr.length).fill(1);

    let prefix = 1;
    for (const key in arr) {
        res[key] = prefix;
        prefix *= arr[key];
    }
    let postfix = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] *= postfix
        postfix *= arr[i]
    }
    return res;
}


console.log(productItselArray([1,2,3,4]));
