const dom = {
    type: 'div',
    props : {id: "chant"},
    children: [{type:'h1', children:'Hello'}]
};

const entry = document.getElementById('root');

const generateElement = (domobj, entry) => {
    const helper = (obj) => {
        const {type, props, children} = obj;
        const el = document.createElement(type);
        if(props){
            for (const key in props) {
                el[key] = props[key];
            }
        }

        if(typeof children === 'string'){
            el.innerText = children;
        } else {
            const fragment = document.createDocumentFragment();
            for (const child of children) {
                fragment.appendChild(helper(child));
            }

            el.appendChild(fragment);
        }

        return el;
    }

    const generationDom = helper(domobj);
    console.log(generationDom);
    // entry.appendChild(generationDom);
}


generateElement(dom, entry);