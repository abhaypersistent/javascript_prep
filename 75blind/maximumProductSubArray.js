// input = [2,3,-2,4]
// outPut = 6

// for brute force : O(n^2)

// patterns : to solve the problem 
// [1,2,3] : if alls positive : all multiply is the answer
// if all are negative : 
// max and min should to take note
// if it value be zero : 
const maxSubArray = (arr) => {
    // let res = arr.reduce((acc, num) => { return Math.max(acc,num) },0);
    let prefix  = 1;
    let suffix = 1;

    let n = arr.length - 1;
    let res = -Infinity;

    for (let i = 0; i < n; i++) {
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;

        prefix = prefix * arr[i];
        suffix = suffix * arr[n - i];
        res = Math.max(res, Math.max(prefix, suffix));
    }

    return res;
}

const maxSubArrayBruteForce = (arr) => {
    // tl = o(n^3)
    let max = -Infinity;
    let len = arr.length - 1
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let prod = 1;
            for (let k = i; k < j; k++) {
                prod *= arr[k]; 
            }
            max = Math.max(max, prod);
        }
    }

    return max;
}

const maxSubArrayBruteForceImp = (arr) => {
    // tl = o(n^2)
    let max = -Infinity;
    let len = arr.length - 1
    for (let i = 0; i < len; i++) {
        let prod = 1;
        for (let j = i; j < len; j++) {
            prod *= arr[j]; 
            max = Math.max(max, prod);
        }
    }
    return max;
}

console.log(maxSubArray([2,3,-2,4]));