// higlight the section
// popover with next and previous move steps
// scroll t element if not in viewport to highlight

const steps = ["3", "header", "8", "12", "footer", "5"];
let index = 0;
const highlight = (id) => {

    document.getElementById("sp-highlight")?.remove();
    document.getElementById("sp-popover")?.remove();

    const element = document.getElementById(id);
    scroll(element);
    const elementDimensions = element.getBoundingClientRect();
    console.log(elementDimensions);
    highlightHelper(elementDimensions);
    popover(elementDimensions);
}
// alert(1);

const highlightHelper = (elementDimension) => {
    let top = elementDimension.top + window.screenY;
    let left = elementDimension.left + window.screenX;
    let width = elementDimension.width;
    let height = elementDimension.height;

    const ele = document.createElement('div');
    ele.id = "sp-highlight"
    ele.style = `
        position: absolute;
        top: ${top - 2}px;
        left: ${left- 2}px;
        width: ${width}px;
        height: ${height}px;
        transition: border .2s ease;
    `;

    document.getElementById('wrapper').appendChild(ele);

    setTimeout(() => {
        ele.style.border = "2px solid #000";
    }, 100);
}

const popover = (elementDimension) => {
    let bottom = elementDimension.bottom + window.screenY;
    let left = elementDimension.left + window.screenX;
    let right = elementDimension.right;

    const ele = document.createElement("div");
    ele.id = "sp-popover"
    ele.style = `
        position: absolute;
        top: ${bottom}px;
        left: ${(left + right) / 2 - 50}px;
        background: #fff;
        height: 100px;
        width: 100px;
    `
    ele.appendChild(navigateButton());
    document.getElementById('wrapper').appendChild(ele);
}


const navigateButton = () => {
    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.addEventListener('click', () => {
        if(index < steps.length - 1){
            highlight(steps[++index]);
        }
    });

    const previousButton = document.createElement('button');
    previousButton.textContent = "Prev";
    previousButton.addEventListener('click', () => {
        if(index > 0){
            highlight(steps[--index]);
        }
    });
    const fragment = document.createDocumentFragment();
    fragment.appendChild(nextButton);
    fragment.appendChild(previousButton);
    return fragment;

}

const scroll = (element) => {
    const eleTop = element.offsetTop;
    window.scroll({top: eleTop, behavior:"smooth"});
}

highlight(steps[index]);