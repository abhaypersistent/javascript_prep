// rgb converted
const getComputedColot = (colorCode) => {
    const div = document.createElement('div');
    div.style.color = colorCode;
    document.body.appendChild(div);
    const computedStyles = window.getComputedStyle(div);
    const { color } = computedStyles;
    document.body.removeChild(div);
    return color;
}

const findElement = (root, colorCode) => {
    const standardColor = getComputedColot(colorCode);

    const output = [];

    const search = (ele) => {
        const color = ele.style.color;

        const computedColor = getComputedColot(color);
        if(computedColor === standardColor){
            output.push(ele)
        }

        for(let child of ele.children){
            search(child);
        }

    }

    search(root);

    return output;
}

let root = document.getElementById('main');
console.log(findElement(root,'red'));