export interface Item {
  name: string;
  image: string;
}

export interface BurnableItem extends Item {
  burnrate: number;
  burnsTo: Item;
  burnsToAmount?: number;
}

export const items: Array<Item> = [
  {name: 'Metal Fragments', image: '/assets/images/metal.fragments.png' },
  {name: 'High Quality Metal', image: '/assets/images/metal.refined.png'},
  {name: 'Sulphur', image: '/assets/images/sulfur.png'},
  {name: 'Charcoal', image: '/assets/images/charcoal.png' }
];
export const burnableItems: Array<BurnableItem> = [
  { name: 'Can of beans', image: '/assets/images/can.beans.empty.png', burnrate: 15, burnsTo:  getItemFromName('Metal Fragments'), burnsToAmount: 15 },
  { name: 'Can of tuna', image: '/assets/images/can.tuna.empty.png', burnrate: 15, burnsTo:  getItemFromName('Metal Fragments'), burnsToAmount: 10 },
  { name: 'High Quality Metal Ore', image: '/assets/images/hq.metal.ore.png', burnrate: 10, burnsTo: getItemFromName('High Quality Metal'), burnsToAmount: 1 },
  { name: 'Metal Ore', image: '/assets/images/metal.ore.png', burnrate: 5, burnsTo: getItemFromName('Metal Fragments'), burnsToAmount: 1 },
  { name: 'Sulphur Ore', image: '/assets/images/sulfur.ore.png', burnrate: 2.5, burnsTo: getItemFromName('Sulphur'), burnsToAmount: 1 },
  { name: 'Wood', image: '/assets/images/wood.png', burnrate: 1, burnsTo:  getItemFromName('Charcoal'), burnsToAmount: 1 }
];

export function getItemFromName(name: string): Item {
  return items.find(i => i.name === name) || burnableItems.find(i => i.name === name);
}
