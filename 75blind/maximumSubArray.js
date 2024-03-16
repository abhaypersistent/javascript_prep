// [-2,1,-3,4,-1,2,1,-5,4]
// maximum Subarray

const maximumArray = (arr) => {
    let maxSub = arr[0];
    let currSum = 0;


    for (const key of arr) {
        if(currSum < 0){
            currSum = 0;
        }
        currSum += key;
        maxSub = Math.max(currSum, maxSub);
    }

    return maxSub;
}


console.log(maximumArray([-2,1,-3,4,-1,2,1,-5,4]));