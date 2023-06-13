// css generator test
// till target generate the css
const root = document.getElementById('root');
const target = document.getElementById('target');

const cssGenerator = (root, target) => {
    const selector = [];

    while(root != target){
        const nth = Array.from(target.parentNode.children).indexOf(target);
    }

    return selector.join('>');
}


console.log(cssGenerator(root, target));
