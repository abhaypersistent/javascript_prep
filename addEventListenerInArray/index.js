// array with the listeners
// SD3 7+


Array.prototype.listeners = {};

Array.prototype.addListener = function(eventName,callback){
    if(!this.listeners[eventName]){
        this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(callback);
}

Array.prototype.pushWithEvent = function(eventName, value){
    this.push(...value);
    this.triggerEvent(eventName,value);
}

Array.prototype.popWithEvent = function(eventName){
    const value = this.pop();
    this.triggerEvent(eventName,value);
}

Array.prototype.triggerEvent = function(eventName, value){
    if(this.listeners[eventName]){
        this.listeners[eventName].forEach(callback => {
            callback(eventName,value, this);
        });
    }
}

const arr = [];
arr.addListener('add', (eventName, items, array) => {
    console.log('items were added', items);
})

// arr.addListener('add', (eventName, items, array) => {
//     console.log('items were added again', items);
// })

arr.addListener('remove', (eventName, items, array) => {
    console.log('items removed', items);
})

arr.pushWithEvent('add', [4,5]);

arr.popWithEvent('remove');