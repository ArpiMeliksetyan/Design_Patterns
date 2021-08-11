class Store {

    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    sale(discount) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount));
    }

    removeObserver(observer) {
        const removeIndex = this.subscribers.findIndex(obs => {
            return observer === obs;
        });

        if (removeIndex !== -1) {
            this.subscribers = this.subscribers.slice(removeIndex, 1);
        }
    }

}

module.exports = Store;
