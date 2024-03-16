

const sumThreeToZero = (arr) => {

    let res = [];
    let n = arr.length - 1;
    let strSet = new Set();
    for (let i = 0; i < n; i++) {
        
        for (let j = i + 1; j < n; j++) {
            
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0){
                    let temp = [arr[i], arr[j], arr[k]].sort((a,b) => a - b);
                    if(!strSet.has(temp.toString())){
                        res.push([arr[i], arr[j], arr[k]]);
                        strSet.add(temp.toString())
                    }
                    console.log(temp.toString());
                }
                
            }
        }
        
    }

    return res;
}


const sumToThree2N = (arr) => {
    let res = [];
    let len = arr.length - 1;
    let strSet = new Set();
    for (let i = 0; i < len; i++) {
        let set1 = new Set();
        for (let j = 0; j < len; j++) {
            let third = - (arr[i] + arr[j]);
            if(set1.has(third)){
                let temp = [arr[i], arr[j],third].sort((a,b) => a - b);
                if(!strSet.has(temp.toString())){
                    res.push([arr[i], arr[j], third]);
                    strSet.add(temp.toString())
                }
            }
            set1.add(arr[j]);
        }
        
    }

    return res;
}



// n^2



// console.log(sumThreeToZero([-1,0,1,2,-1,-4]));

// n^2


const sum3Optimal = (arr) => {
    let ans = [];
    arr.sort((a,b) => a - b);
    // (n log n + 0(n^2))
    // console.log(arr);
    let len = arr.length - 1;
    for (let i = 0; i < len; i++) {
        if(i > 0 && arr[i] == arr[i - 1]) continue;

        let j = i + 1;
        let k = len - 1;

        while( j < k){
            let sum  = arr[i] + arr[j] + arr[k];
            if(sum < 0){
                j++;
            }else if(sum > 0){
                k--;
            } else{
                ans.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
                while( j < k && arr[j] == arr[j - 1]) j++;
                while(j < k && arr[k] == arr[k + 1]) k--;
            }
        }
    }

    return ans;
}


console.log(sumThreeToZero([-1,0,1,2,-1,-4]));
console.log(sum3Optimal([-1,0,1,2,-1,-4]));
console.log(sumToThree2N([-1,0,1,2,-1,-4]));
console.log(sumToThree2N([-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2]));
console.log(sum3Optimal([-2,-2,-2,-1,-1,-1,0,0,0,2,2,2,2]));