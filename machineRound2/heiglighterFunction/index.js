let str = "india will world cup this year";
const keywords = ["india", "cu", "p"];

const highlighter = (str, keywords){
    const uniqueKeyword = new Set(keywords);

    const words = str.split(" ");

    const result = words.map((word) => {
        let output = "";
        if(uniqueKeyword.has(word)){
            output = `<strong>${word}<strong>`
        }else{
            for (let i = 0; i < word.length; i++) {
                
                
            }
        }
    });

}