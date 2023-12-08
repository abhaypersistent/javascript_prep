// uncompress('3(ab)') // 'ababab'
// uncompress('3(ab2(c))') // 'abccabccabcc'

// abbcccdddda to a1b2c3d4a1 : 2 part


function uncompress(str){
    let result = ''

    return result;
}


function compress(str){
    let result = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        count++;
        if(str[i] !== str [i+1]){
            result = result + str[i] + count;
            count = 0;
        }
    }

    return result;
}

console.log(compress('abbcccdddda'));