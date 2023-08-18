

const sdk = function(){
    this.logs = [];
    this.count = 1;

    this.log = function(event){
        this.logs.push(event);
    }

    this.wait = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if(this.count % 5 === 0){
                reject();
            } else{
                resolve();
            }
        },1000)
    })

    this.sendAnalyticsEvent = async function(){
        // base condition 
        if(this.logs.length === 0){
            return;
        }

        const current = this.logs.shift();

        try {
            await this.wait();
            console.log("new log has been added", current);
            this.count++;
        
        } catch (error) {
            console.log('--------------------------------');
            console.log("event has been failed", current);
            console.log("event has been retrying", current);
            console.log('--------------------------------');

            this.count = 1;
            this.logs.unshift(current);
        } finally {
            this.sendAnalyticsEvent();
        }
    }
}

const sdkNew = new sdk();
sdkNew.log("Event 1");
sdkNew.log("Event 2");
sdkNew.log("Event 3");
sdkNew.log("Event 4");
sdkNew.log("Event 5");
sdkNew.log("Event 6");
sdkNew.log("Event 7");
sdkNew.log("Event 8");
sdkNew.log("Event 9");
sdkNew.log("Event 10");
sdkNew.log("Event 11");
sdkNew.log("Event 12");
sdkNew.log("Event 13");
sdkNew.log("Event 14");
sdkNew.log("Event 15");
sdkNew.log("Event 16");
sdkNew.log("Event 17");