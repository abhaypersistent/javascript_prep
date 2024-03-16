// binary search O(log n)
// unique elements

const binarySearchInRotatedArray = (arr) => {
    let res = arr[0];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if(arr[left] < arr[right]){
            res = Math.min(res,arr[l]);
            break;
        }

        let mid = left + Math.floor((right - left) / 2);
        res = Math.min(res,arr[mid]);
        if(arr[mid] >= arr[left]){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }

    return res;
}


console.log(binarySearchInRotatedArray([5,6,7,8,9,1,2,3]));