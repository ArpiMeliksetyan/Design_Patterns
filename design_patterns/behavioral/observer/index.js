const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const shop1 = new Store("Zara");
const shop2 = new Store("Made");

const alex = new Shopper("Alex");
const eve = new Shopper("Eve");
const sharon = new Shopper("Sharon");
const mike = new Shopper("Mike");

const megaMall = new Mall();

shop1.subscribe(alex);
shop1.subscribe(eve);
shop1.subscribe(mike);
shop1.subscribe(megaMall);

shop2.subscribe(sharon);
shop2.subscribe(megaMall);

shop1.sale(20);
shop2.sale(50);

console.log(megaMall.sales);

