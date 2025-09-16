// src/data/menu.ts
export interface IMenuItem {
  name: string;
  ingredients?: string;
  price?: number; // för de kategorier som har individuella priser
}

export interface IMenuCategory {
  title: string;
  items: IMenuItem[];
  basePrice?: number; // för prisklasser (alla pizzor samma pris)
  familyPrice?: number; // för familjepizzor i dessa kategorier
  panPrices?: { S: number; M: number; L: number }; // för American Pan Pizza
}

export const menu: IMenuCategory[] = [
  {
    title: "Prisklass 1",
    basePrice: 95,
    familyPrice: 245,
    items: [
      { name: "Margarita", ingredients: "ost, tomatsås" },
      { name: "Vesuvio", ingredients: "skinka" },
      { name: "Banana", ingredients: "banan, curry, skinka" },
      { name: "Capricciosa", ingredients: "skinka, champinjoner" },
      { name: "Calzone", ingredients: "(inbakad) skinka" },
      { name: "Hawaii", ingredients: "skinka, ananas" },
      { name: "Opera", ingredients: "skinka, tonfisk" },
      { name: "Bussola", ingredients: "skinka, räkor" },
      { name: "Rimini", ingredients: "skinka, bacon" },
      { name: "Pompei", ingredients: "skinka, köttfärs" },
      { name: "Bologna", ingredients: "köttfärs" },
      { name: "Al tono", ingredients: "tonfisk, lök" },
      { name: "Marinara", ingredients: "musslor, räkor" },
      { name: "Milano", ingredients: "krabba, räkor" },
      { name: "Kastore", ingredients: "salami, paprika" },
    ],
  },
  {
    title: "Prisklass 2",
    basePrice: 100,
    familyPrice: 265,
    items: [
      { name: "Capri", ingredients: "skinka, curry, banan, ananas" },
      { name: "Lagondola", ingredients: "bacon, ägg, paprika, tomat" },
      { name: "Torino", ingredients: "skinka, räkor, champinjoner" },
      { name: "Isabella", ingredients: "köttfärs, skinka, räkor" },
      { name: "Quattro", ingredients: "skinka, champinjoner, räkor, musslor, oliver, kronärtskocka" },
      { name: "Porto", ingredients: "skinka, räkor, bacon, bearnaisesås" },
      { name: "Orientale", ingredients: "lök, köttfärs, champinjoner" },
      { name: "Roma", ingredients: "krabba, räkor, tonfisk" },
      { name: "Polly", ingredients: "kyckling, champinjoner, lök, curry" },
      { name: "Riviera", ingredients: "salami, bacon, ägg" },
      { name: "Vegetarisk", ingredients: "champinjoner, paprika, ananas, lök, tomat, oliver, kronärtskocka" },
      { name: "Mama Mia", ingredients: "köttfärs, salami, lök, paprika" },
      { name: "Portofino", ingredients: "köttfärs, salami, bacon, tomat, lök" },
      { name: "Chanti", ingredients: "kyckling, ananas, banan, jordnötter, curry" },
      { name: "Krabbpizza", ingredients: "skinka, räkor, krabba" },
    ],
  },
  {
    title: "Specialpizzor",
    basePrice: 110,
    familyPrice: 305,
    items: [
      { name: "Calzone Special", ingredients: "(dubbelinbakad) skinka, räkor, champinjoner" },
      { name: "Husets Special", ingredients: "köttfärs, paprika, lök, bearnaisesås" },
      { name: "Havets Special", ingredients: "krabba, räkor, tonfisk, musslor" },
      { name: "Valencia", ingredients: "oxfilé, lök, paprika, champinjoner, bearnaisesås" },
      { name: "Vallon Special", ingredients: "fläskfilé, champinjoner, lök, tomat, bearnaisesås" },
      { name: "Pizzabarens Special", ingredients: "filé, paprika, lök, persilja, champinjoner, cayennepeppar, bearnaisesås" },
      { name: "Ciao Ciao", ingredients: "(halvinbakad) oxfilé, champinjoner, tomat, bearnaisesås" },
      { name: "Shish Kebab", ingredients: "(halvinbakad) oxfilé, lök, paprika, bearnaisesås" },
      { name: "Gimo Special", ingredients: "fläskfilé, champinjoner, lök, bearnaisesås" },
      { name: "Grekisk Special", ingredients: "oxfilé, champinjoner, lök, pepperoni, paprika, oliver, tomat, fårost" },
      { name: "Gorgonzola", ingredients: "fläskfilé, tomat, lök, gorgonzola, bearnaisesås" },
      { name: "Gorgonzola Special", ingredients: "oxfilé, lök, paprika, tomater, champinjoner, gorgonzola, bearnaisesås" },
      { name: "Pizzahuset Special", ingredients: "fläskfilé, bacon, salami, paprika, jordnötter, tabasco, bearnaisesås" },
      { name: "Carusel", ingredients: "fläskfilé, lök, soltorkade tomater, ruccola" },
      { name: "Icarus", ingredients: "parmaskinka, rödlök, ruccola" },
      { name: "Alis Special", ingredients: "oxfilé, fläskfilé, lök, tomat, bearnaisesås" },
    ],
  },
  {
    title: "Kebabpizzor",
    basePrice: 110,
    familyPrice: 305,
    items: [
      { name: "Kebabpizza", ingredients: "kebabkött, pepperoni, lök, kebabsås" },
      { name: "Vikingbåt", ingredients: "(halvinbakad) kebabkött, pepperoni, tomat, kebabsås" },
      { name: "Bebosh Special", ingredients: "kebabkött, isbergssallad, tomat, lök, pepperoni, kebabsås" },
      { name: "Kebabpizza Special", ingredients: "kebabkött, tomat, lök, isbergssallad, pepperoni, kebabsås" },
      { name: "Hockey", ingredients: "kebabkött, tomat, lök, strips, kebabsås" },
      { name: "Hallstavik", ingredients: "(halvinbakad) kebabkött, fläskfilé, lök, vitlökssås" },
    ],
  },
  {
    title: "Mexikanska pizzor",
    basePrice: 110,
    familyPrice: 305,
    items: [
      { name: "Azteka", ingredients: "skinka, tacosås, tacokrydda, jalapeño" },
      { name: "Mexicana", ingredients: "köttfärs, tacosås, tacokrydda, vitlök, lök jalapeño" },
      { name: "Acapulco", ingredients: "oxfilé, tacokrydda, vitlök, lök, champinjoner, jalapeño, tacosås" },
    ],
  },
  {
    title: "Parmaskinka & Mozzarella",
    basePrice: 95,
    familyPrice: 220,
    items: [
      { name: "Margarita", ingredients: "Ost, tomatsås" },
      { name: "Vesuvio", ingredients: "Skinka" },
    ],
  },
  {
    title: "American Pan Pizza",
    panPrices: { S: 110, M: 140, L: 170 },
    items: [
      { name: "Chicago", ingredients: "Skinka, champinjoner, lök" },
      { name: "Texas", ingredients: "Köttfärs, jalapeños, lök" },
    ],
  },
  {
    title: "Sallader",
    items: [
      { name: "Cheeseburgare", ingredients: "Nötkött, ost, sallad", price: 85 },
      { name: "Baconburgare", ingredients: "Nötkött, bacon, ost", price: 95 },
    ],
  },

  {
    title: "Hamburgare",
    items: [
      { name: "Cheeseburgare", ingredients: "Nötkött, ost, sallad", price: 85 },
      { name: "Baconburgare", ingredients: "Nötkött, bacon, ost", price: 95 },
    ],
  },
  {
    title: "Kebab & Falafel",
    items: [
      { name: "Cheeseburgare", ingredients: "Nötkött, ost, sallad", price: 85 },
      { name: "Baconburgare", ingredients: "Nötkött, bacon, ost", price: 95 },
    ],
  },
  {
    title: "A la carte",
    items: [
      { name: "Cheeseburgare", ingredients: "Nötkött, ost, sallad", price: 85 },
      { name: "Baconburgare", ingredients: "Nötkött, bacon, ost", price: 95 },
    ],
  },
  {
    title: "Tillbehör",
    items: [
      { name: "Bearnaisesås", price: 20 },
      { name: "Kebabsås", price: 20 },
      { name: "Pizzasallad", price: 20 },
    ],
  },
];
