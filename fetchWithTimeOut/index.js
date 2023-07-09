const fetchWithTimeout = (url, delay) => {
    return new Promise((resolve, reject) => {
        const controller = new AbortController();
        const signal = controller.signal;

        let timeID = null;

        fetch(url, {signal})
        .then((resp) => {
            resp.json().then((e) => {
                clearTimeout(timeID);
                resolve(e)
            }).catch((error) => {
                reject(error);
            })
        })
        .catch((error) => {
            reject(error);
        })

        timeID = setTimeout(() => {
            console.log("Aborted");
            controller.abort();
        }, delay)

    })
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 100).then((resp) => {
    console.log(resp);
}).catch((error) => {
    console.error(error);
})