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
    title: "Pizzor Prisklass 1",
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
    title: "Pizzor Prisklass 2",
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
    basePrice: 120,
    familyPrice: 305,
    items: [
      { name: "Parma", ingredients: "parmaskinka, mozzarella, tomater, champinjoner, ruccola" },
      { name: "La Rosa", ingredients: "parmaskinka, soltorkade tomater, fårost, oliver" },
      { name: "Buffalo", ingredients: "mozzarella, pepperonikorv, lök, paprika, oliver, jalapeño, champinjoner, vitlökssås" },
      { name: "Hallsta", ingredients: "mozzarella, parmaskinka, bacon, salami, ruccola" },
    ],
  },
  {
    title: "American Pan Pizza",
    panPrices: { S: 155, M: 215, L: 255 },
    items: [
      { name: "Honolulu", ingredients: "skinka, räkor, ananas, banan, curry" },
      { name: "San Fransisco", ingredients: "skinka, champinjoner, tomat, lök, paprika, oliver" },
      { name: "Indiana", ingredients: "kyckling, champinjoner, lök, tomat" },
      { name: "Arizona", ingredients: "skinka, bacon, räkor, champinjoner, lök, tomat" },
      { name: "New York", ingredients: "fläskfilé, lök, tomat, champinjoner, bearnaisesås" },
      { name: "Pizza Ruzze", ingredients: "oxfilé, champinjoner, tomat, bearnaisesås" },
    ],
  },
  {
    title: "Sallader",
    items: [
      { name: "Räksallad", ingredients: "isbergssallad, tomat, gurka, räkor, ost, rhode island dressing, nybakat bröd", price: 110 },
      { name: "Tonfisksallad", ingredients: "isbergssallad, tomat, gurka, lök, paprika, tonfisk, rhode island dressing, nybakat bröd", price: 110 },
      { name: "Kebabsallad", ingredients: "isbergssallad, tomat, gurka, kebab, lök, rhode island dressing, nybakat bröd", price: 110 },
      { name: "Grekisk sallad", ingredients: "isbergssallad, tomat, gurka, lök, paprika, oliver, fårost, rhode island dressing, nybakat bröd", price: 110 },
      { name: "Ost- & skinksallad", ingredients: "isbergssallad, tomat, gurka, ost, skinka, paprika, rhode island dressing, nybakat bröd", price: 110 },
      { name: "Kycklingsallad", ingredients: "isbergssallad, tomat, gurka, lök, kyckling, rhode island dressing, nybakat bröd", price: 115 },
      { name: "Avocadosallad", ingredients: "isbergssallad, tomat, gurka, ost, avokado, skinka, räkor, majs, rhode island dressing, nybakat bröd", price: 115 },
      { name: "Krabbsallad", ingredients: "isbergssallad, tomat, gurka, ost, krabba, räkor, sparris, rhode island dressing, nybakat bröd", price: 115 },
      { name: "Mozzarellasallad", ingredients: "isbergssallad, tomat, gurka, parmaskinka, mozzarella, ruccola, soltorkade tomater, lök, oliver, rhode island dressing, nybakat bröd", price: 120 },
    ],
  },

  {
    title: "Hamburgare",
    items: [
      { name: "Hamburgare med bröd, 90g", ingredients: "bröd, läsk", price: 80 },
      { name: "Hamburgertallrik, 90g", ingredients: "strips, läsk", price: 90 },
      { name: "Hamburgare med bröd, 150g", ingredients: "bröd, läsk", price: 95 },
      { name: "Hamburgertallrik, 150g", ingredients: "strips, läsk", price: 100 },
    ],
  },
  {
    title: "Kebab & Falafel",
    items: [
      { name: "Kebabtallrik", ingredients: "med strips", price: 100 },
      { name: "Kebabrulle", ingredients: "", price: 100 },
      { name: "Kebab skrovmål", ingredients: "med strips", price: 115 },
      { name: "Kebab med bröd", ingredients: "med bröd", price: 90 },
      { name: "Kycklingrulle", ingredients: "Nötkött, ost, sallad", price: 100 },
      { name: "Ost- & skinkrulle", ingredients: "Nötkött, bacon, ost", price: 95 },
      { name: "Kycklingtallrik", ingredients: "Nötkött, ost, sallad", price: 115 },
      { name: "Falafelrulle", ingredients: "Nötkött, bacon, ost", price: 95 },
    ],
  },
  {
    title: "A la carte",
    items: [
      { name: "Nötbit", ingredients: "med strips och bearnaisesås", price: 105 },
      { name: "Schnitzel", ingredients: "med strips och bearnaisesås", price: 115 },
      { name: "Rödspätta", ingredients: "med strips och remouladsås", price: 120 },
      { name: "Grillbiff", ingredients: "med strips och bearnaisesås", price: 115 },
      { name: "Chicky Bits", ingredients: "med strips och currysås", price: 120 },
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
