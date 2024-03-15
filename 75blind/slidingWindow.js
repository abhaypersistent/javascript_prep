// best time to buy and sell stock
// two pointer approach means sliding window 
// o(1)
// o(n)
const maxProfit = (arr) => {
    let left = 0;
    let right = 1;

    let maxProfit = 0;

    while (right < arr.length) {
        if(arr[right] > arr[left]){
            let profit = arr[right] - arr[left];
            maxProfit = Math.max(maxProfit, profit);
        }else{
            left = right;
        }
        right++;
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));