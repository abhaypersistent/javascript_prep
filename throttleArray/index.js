let button = document.getElementById('clickme');
console.log('In the button');

// const throttle = (array, limit, callback, delay) => {
//     let timerID;
//     let lastRun;
//     let queue = [...array];
//     console.log("in the throttle");
//     return function (){
//         if(!lastRun){
//             const ele = queue.splice(0,limit);
//             callback(ele);
//             lastRun = Date.now();
//         }else{
//             clearTimeout(timerID);
//             timerID = setTimeout(() => {
//                 if(Date.now() - lastRun >= delay){
//                     const ele = queue.splice(0,limit);
//                     callback(ele);
//                     lastRun = Date.now();
//                 }
//             }, delay - (Date.name() - lastRun));
//         }
//     }
// }

const throttle = (array, limit, callback, delay) => {
    let timerId;
    let lastRan;
    let queue = [...array];

    return function () {
      if (!lastRan) {
        const ele = queue.splice(0, limit);
        callback(ele);
        lastRan = Date.now();
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          if (Date.now() - lastRan >= delay) {
            const ele = queue.splice(0, limit);
            callback(ele);
            lastRan = Date.now();
          }
        }, delay - (Date.now() - lastRan));
      }
    };
  };

function throttleFunction(){
    return throttle([1,2,3,4,5,6,7,8], 2 , (tasks)=> {console.log(tasks)}, 2000);
}
button.addEventListener('click', throttle(
    [1, 2, 3, 4, 5, 6, 7, 8],
    2,
    (tasks) => {
      console.log(tasks);
    },
    1000
  ));