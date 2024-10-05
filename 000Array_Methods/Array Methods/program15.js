function printProductInfo({name,price,rom:ROM,...remainInArray},quantity){
   console.log(name);
   console.log(remainInArray);
   console.log(ROM);
   console.log(price*quantity);
}

let product = {
   name: "Iphone 15",
   price: 100000,
   brand: "Apple",
   ram: "6 GB",
   rom: "128 GB",
};

printProductInfo(product, 4);
