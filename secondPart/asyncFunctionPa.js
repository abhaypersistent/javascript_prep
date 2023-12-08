// execute async task

function createAsyncFunction() {
    const value = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value < 5){
                reject(`error ${value}`);
            }else{
                resolve(value * 1000);
            }
        }, value * 1000);
    })
}

let tasks = [
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction(),
    createAsyncFunction()
];


const asyncParrale = (tasks, callback) => {
    const results = [];
    const error = [];

    let completed = 0;

    tasks.forEach((task) => {
        task
        .then((val) => {
            results.push(val)
        })
        .catch((err) => {
            error.push(err);
        })
        .finally(() => {
            completed++;
            if(completed >= task.length){
                callback(error, results);
            }
        })
        
    })
}

asyncParrale(tasks, (error, result) => {
    console.log(error);
    console.log(result);
})






createAsyncFunction().then((val) => {
    console.log(val);
}).catch((err) =>{
    console.log(err);
})