let output = document.getElementById('output');
let baseValue = document.getElementById('basevalue');
let mainDiv = document.getElementById('main-div');

mainDiv.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'increment':
            output.innerHTML = parseInt(output.innerHTML) + parseInt(baseValue.value);
            break;
        case 'decrement':
            output.innerHTML = parseInt(output.innerHTML) - parseInt(baseValue.value);
            break;
        case 'reset':
            output.innerHTML = 0;
            break;            
        default:
            break;
    }
});



