function createAsyncFunction(){
    const value = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value < 5){
                reject(`Error ${value}`);
            }else{
                resolve(value*1000);
            }
        }, value * 1000)
    });
}

let tasks = [
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction()
];

const asyncSequence = (tasks, callback) => {
    let results = [];
    let errors = [];
    let completed = 0;

    tasks.reduce((prev, curr) => {
        return prev.finally(() => {
            return curr.then((val) => {
                results.push(val);
            }).catch((error) => {
                errors.push(error);
            }).finally(() => {  
                completed++;
                if(completed === tasks.length){
                    callback(errors,results);
                }
            })
        })
    }, Promise.resolve())
}

asyncSequence(tasks, (error, result) => {
    console.log(error);
    console.log(result);
})