const Singleton = (function () {

    let instance;

    function createInstance() {
        let object = new Object('I am the instance');
        return object;
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance
        }
    }
})();

let a1, b1;

a1 =   Singleton.getInstance();
b1 =  Singleton.getInstance();

console.log(a1 === b1);



