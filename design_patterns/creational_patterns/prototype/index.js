const scout_prototype = require('./scoutPrototype');

const alex = scout_prototype.clone();
alex.name = 'Alex'
alex.addItemToList('slingshot');

const eve = scout_prototype.clone();
eve.name = 'Eve'
eve.addItemToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
