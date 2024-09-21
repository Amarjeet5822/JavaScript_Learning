// 1 ===================================

const person = {
  name: "John",
  address: {
    city: 'New York',
    street: '123 Main St'
  }
};
// Without optional chaining
// const city = person.address.city // New York
// With Optional chaining 
// const city1 = person.address?.city // New York

const user = {
  id: 1,
  name: 'Jane Doe',
  contact: {
    phone: "123-456-7890",
    email:'jane@gmail.com'
  }
};

function getUserEmail( user ) {
  return user?.contact?.email ?? 'Email not provided'
}

console.log(getUserEmail());