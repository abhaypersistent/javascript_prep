// input : [2,3,5,6,7,8,9,12]
// target : 21

const twoSum = (arr, target) => {
    let targetObject = {};

    for (const key of arr) {
        let diff = target - key;
        if(targetObject[diff]){
            return [diff, key];
        }else{
            targetObject[key] = true;
        }
    }

    return [];
}

console.log(twoSum([2,3,5,6,7,8,9,12],21));