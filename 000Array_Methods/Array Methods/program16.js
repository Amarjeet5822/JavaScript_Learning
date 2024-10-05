let product = {
   name: "Iphone 15",
   price: 100000,
   brand: "Apple",
   ram: "6 GB",
   rom: "128 GB",
   country: {
      country1: "India",
      country2: "USA",
      country3: "UK",
      country4: "Australia",
   },
   countries: ["India", "USA", "UK", "Australia"],
};

// HW
// L2 -> L3 ?

let { countries: [c1, c2, ...restCountries] } = product;
console.log(c1, c2, restCountries);

// let {
//    country: { country2 },
// } = product;

// console.log(country2);
