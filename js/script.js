// Zavdanya 1
const items = ['Риба', 'Свинина', 'Телятина', 'Курка'];
let result = "";
for (let i = 0; i < items.length; i++) {
  result += items[i];
  if (i < items.length - 1) {
    result += ", ";
  }
}
console.log(result);

console.log(items.join(', '));
// Zavdanya 2
const cards = [
    'Card-1',
    'Card-2',
    'Card-3',
    'Card-4',
    'Card-5',
]
// Remove
console.log(cards.indexOf('Card-3'));
const removedItems = cards.splice(2, 1)
console.log(cards);
// Add
cards.splice(5, 0, 'Card-6')
console.log(cards);
// Update
cards.splice(2, 1, 'Card-3-4')
console.log(cards);