const root = document.getElementById('root');

let count = 5;

function createElement(n) {
    const newElement = document.createElement('div');
    newElement.classList.add('progressBar');
    newElement.style = `transition: width ${n}s ease`;

    root.appendChild(newElement);
    setTimeout(()=> {
        newElement.classList.add("fullWidth");
    },500)

    newElement.addEventListener('transitionend', ()=> {
        count -= 1;
        if(count >= 1){
            createElement(5);
        }
    })

    newElement.removeEventListener('transitionend', () => {
        console.log('removed transition end')
    })
}

function startTrans(){
    createElement(5)
}