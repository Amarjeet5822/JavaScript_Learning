var maze = {
   name: "Tiger",
   age: 32,
   address: {
      state: "Maharashtra",
      city: "Mumbai",
      pincode: "110011",
   },
   movies: [
      {
         name: "Movie 1",
         year: 2000,
         budget: "1 crore",
         boxOffice: "10 crore",
         cast: ["Yash", "Actor2", "Hulk", "Tom"],
      },
      {
         name: "Movie 2",
         year: 2002,
         budget: "1 lakh",
         boxOffice: "1 crore",
         cast: ["Bablu", "Kaleen", "Mirza"],
      },
      {
         name: "Movie 3",
         year: 2004,
         budget: "3 crore",
         boxOffice: "100 crore",
         cast: ["Iron Man", "Hulk", "Thor"],
      },
   ],
   extra: {
      a: {
         0: 1,
         1: 2,
         2: 3,
      },
      b: {
         0: 1,
         1: 2,
         2: 3,
      },
      c: {
         left: {
            0: 1,
            1: 2,
            2: 3,
         },
         right: {
            0: 1,
            1: 2,
            2: 3,
         },
      },
   },
};

// console.log(maze?.address?.name);

// console.log(maze?.movies[0].boxOffice.price);

// console.log(maze.extra.a?.left?.tiger);

let obj = {
   name: "Raj",
   age: 21,
   
};
console.log(obj.house?.location1);

// Error:
// undefined.location1
// undefined.house