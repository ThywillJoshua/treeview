const box2SubCats = [
  { name: "House 1", subCategories: [] },
  { name: "House 2", subCategories: [] },
  { name: "House 3", subCategories: [] },
];

const item1SubCats = [
  { name: "Box 1", subCategories: [] },
  { name: "Box 2", subCategories: box2SubCats },
  { name: "Box 3", subCategories: [] },
];

const data = [
  { name: "Item 1", subCategories: item1SubCats },
  { name: "Item 2", subCategories: [] },
  { name: "Item 3", subCategories: [] },
  { name: "Item 4", subCategories: [] },
];

export default data;
