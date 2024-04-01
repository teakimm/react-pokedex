function choice(items) {
  const randIndex = Math.floor(Math.random() * items.length);
  return items[randIndex];
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      items.splice(i, 1);
      return item;
    }
  }
  return undefined;
}

export {choice, remove};