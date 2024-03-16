// binary Search algorithm

const searcInBSA = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        
        let mid = left + Math.floor((right - left) / 2);

        if( arr[mid] === target){
            return mid;
        }
        // left sorted array

        if(arr[left] <= arr[mid]){
            if(target > arr[mid] || target < arr[left]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if (target < arr[mid] || target > arr[mid]){
                right =  mid  - 1
            } else{
                left = mid + 1;
            }
        }
    }

    return -1;
}

console.log(searcInBSA([5,6,7,8,9,1,2,3], 1));