
const getByClassName = (root, c) => {
    
    const search = (node) => {
        let result = [];
        
        if(node.classList.contains(c)){
            result.push(node.id);
        }

        for(let child of node.children){
            const res = search(child);
            result = [...result, ...res]
        }


        return result;
    }

    return search(root);
}

// get by class name

const root = document.getElementById('root');
console.log(getByClassName(root, 'd'));

// Get by class name hirechy

// a>c
// ["a","c"]
// index = 0 / "a"
// 

const findByElementClassNameHirechy = (root,className) => {
    const result = [];
    const classes = className.split(">");


    return result;
}

const traverseDom = (el, cl, ind, result) => {
    const targetClass = cl[ind];
     
}


console.log(findByElementClassNameHirechy(document.getElementById('a-1'), "a>c"));
