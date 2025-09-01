// Get the input items
const items = $items();

if (items.length >= 2) {
  const firstContent = items[0].json.content;
  const secondContent = items[1].json.content;

  if (firstContent === secondContent) {
    //return [items[1]];
  }
  else{
    return [items[0]];
  }
}