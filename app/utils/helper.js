const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const seedData = [
  {
    item: "table",
    children: [
      {
        item: "Cost of Goods Sold",
        children: [
          {
            item: "Packaging",
          },
          {
            item: "Feed Grain & Meal",
            children: [
              {
                item: "Corn",
              },
              {
                item: "Hay",
              },
            ],
          },
          {
            item: "Seed & Plants",
          },
          {
            item: "Livestock for Resale",
          },
        ],
      },
      {
        item: "Income",
        children: [
          {
            item: "CSA Sales",
          },
          {
            item: "Custom Grazing",
          },
          {
            item: "Farmers Market Sales",
          },
          {
            item: "Funding Programs",
          },
          {
            item: "Livestock or Crops Resale",
          },
          {
            item: "Memberships",
          },
          {
            item: "Retail Sales",
          },
        ],
      },
    ],
  },
];

function randomArrayWithZeros(length, zeroProbability) {
  const array = [];
  for (let i = 0; i < length; i++) {
    if (Math.random() < zeroProbability) {
      array.push(0);
    } else {
      array.push(Math.floor(Math.random() * 100)); // Random number between 0 and 99
    }
  }
  return array;
}

function sumTwoArrays(a, b) {
  return a.map((cv, i) => {
    return cv + b[i];
  });
}

function getFlattenedCategoryOptions() {
  let result = [];
  seedData[0].children.forEach((parent) => {
    result.push({
      parent: parent.item,
      children: parent.children,
    });
  });

  return result;
}

export {
  months,
  seedData,
  randomArrayWithZeros,
  sumTwoArrays,
  getFlattenedCategoryOptions,
};
