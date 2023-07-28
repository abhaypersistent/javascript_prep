// mock server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandonBool(n){
    const thresold = 1000;
    if(n > thresold) n = thresold;
    return Math.floor(Math.random() * thresold) % n === 0;
}

function getSuggestions(text){
    var pre = 'pre';
    var post = "post";
    var results = [];

    if(getRandonBool(2)){
        results.push(pre + text);
    }

    if(getRandonBool(2)){
        results.push(text);
    }

    if(getRandonBool(2)){
        results.push(text+ post);
    }

    if(getRandonBool(2)){
        results.push(pre + text+ post);
    }

    return new Promise((resolve, reject) => {
        const randomTimeOut = Math.random() * LATENCY;
        setTimeout(() => {
            if(getRandonBool(FAILURE_COUNT)){
                reject();
            }else{
                resolve(results);
            }
        }, randomTimeOut);
    })
}

(function(){
    const input = document.getElementById("search_value");
    const suggestionArea = document.getElementById("suggession_area");


    const onFocus = () => {
        suggestionArea.style.display = 'block';
    }

    const onblur = (e) => {
        if(e.target === input || e.target === suggestionArea){
            return;
        }
        suggestionArea.style.display = 'none';
    }

    const onChange = (e) => {
        console.log(e.target.value);
        const {value} = e.target;
        processData(value);
    }

    const processData = async (value) => {
        suggestionArea.innerHTML = '';
        if(!value){
            return;
        }
        try {
            const resp = await getSuggestions(value);
            if(resp.length > 0){
                const list = document.createElement('ul');
                resp.forEach(element => {
                    const listItems = document.createElement('li');
                    listItems.style.cursor = "pointer";
                    listItems.innerHTML = element;
                    list.append(listItems);
                });
                suggestionArea.innerHTML = '';
                suggestionArea.appendChild(list);
            }

            console.log(resp);
        } catch (error) {
            console.error("Getting the unwanted data", error);
        }
    }

    const onClick = (e) => {
        if(e.target === suggestionArea){
            return;
        }
        input.value = e.target.innerText;
        input.focus();
        suggestionArea.innerHTML = '';
        console.log(e.target.innerText);
    }

    input.addEventListener('focus', onFocus);
    window.addEventListener('blur', onblur);
    input.addEventListener('keyup', onChange);
    suggestionArea.addEventListener("click", onClick);
}())