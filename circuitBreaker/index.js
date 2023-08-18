// halts a function if it fails

const circuitBreaker = (fn, failureCount, timeThresold) => {
    let failure = 0;
    let timeSinceLastFailure = 0;
    let isCLosed = false;
    
    return function(...args){
        if(isCLosed){
            const diff = Date.now() - timeSinceLastFailure;

            if(diff > timeThresold){
                isCLosed = false;
            }else {
               console.error("Service Unavailable");
               return; 
            }
        }

        try {
            const result = fn(...args);
            failure = 0;
            return result;
        } catch (error) {
            failure++;
            timeSinceLastFailure = Date.now();
            if(failure >= failureCount){
                isCLosed = true;
            }
            console.log('error');
        }
    }
}

const testFunction = () => {
    let count = 0;

    return function(){
        count++;
        if(count < 4){
            throw "failed"
        }else{
            return "hello";
        }
    }
}

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

c();
c();
c();
c();
c();
c();
c();
setTimeout(() => {
    c()
},300);
setTimeout(() => {
    console.log(c());
},300);
