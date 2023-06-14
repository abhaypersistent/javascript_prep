
function computeAmount(){
    let temp = {
        total:0,
        lacs: function(num){
            this.total += num * 100000;
            return this;
        },
        crore: function(num){
            this.total += num * 10000000;
            return this;
        },
        thousand: function(num){
            this.total += num * 1000;
            return this;
        },
        value: function(){
            return this.total;
        }
    };
    return temp;
}

let total = computeAmount().lacs(15).crore(5).lacs(20).thousand(45).crore(7).crore(2).value();
console.log(total);