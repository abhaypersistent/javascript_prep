// throttle based on the count
function throttle(fn, count){
    let counter = 0;

    return function(...args){
        if(++counter !== count) return;
        counter = 0;
        fn.apply(this, args);
    }
}

// thtottle based on time classic

// function timeThrottle (fn , delay){
//     let lastTimerID;
//     let lastRun;

//     return function(...args){
//         let context = this;

//         if(!lastRun){
//             fn.apply(context, args);
//             lastRun = Date.now();
//         }else{
//             clearTimeout(lastTimerID);
//             lastTimerID = setTimeout(() => {
//                 if(Date.now() - lastRun >= delay){
//                     fn.apply(context, args);
//                     lastRun = Date.now();
//                 }
//             }, delay - (Date.now() - lastRun));
//         }
//     }
// }

function timeThrottle (fn , delay, option){
    let lastTimingId;
    let lastArgs;

    return function(...args){
        
        const {leading, trailing} = option;

        const waitFn = () => {
            if(trailing && lastArgs){
                fn.apply(this, args);
                lastArgs = null;
                lastTimingId = setTimeout(waitFn, delay);
            }else{
                lastTimingId = null;
            }
        }

        if(!lastTimingId && leading){
            fn.apply(this, args);
        }else{
            lastArgs = args;
        }

        if(!lastTimingId){
            lastTimingId = setTimeout(waitFn, delay);
        }
    }
}

function onClick(){
    console.log('onlicked');
}

// const throttledClick = throttle(onClick, 4);
// const throttledClick = timeThrottle(onClick, 5000);
const throttledClick = timeThrottle(onClick, 2000, {leading: false, trailing:true});

document.getElementById('button').addEventListener('click', throttledClick);