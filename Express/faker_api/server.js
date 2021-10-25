const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded( { extended: true } ) );

const createUser = () => { 
return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
}
}

const createCompany = () => {
return {
    companyName: faker.company.companyName(),
    department: faker.commerce.department(),

    address: {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    }
}
}

app.get("/api/users/new", (request, response) => {
const newUser = createUser();

console.log("new user:")
console.log(newUser);

response.json(newUser);

});

app.get("/api/companies/new", (request, response) => {
let newCompany = createCompany();

console.log("new company:")
console.log(newCompany);

newCompany.department = faker.commerce.department();
console.log("updated company department:")
console.log(newCompany);

response.json(newCompany);
});

app.listen(8000, () => console.log("Listening on port 8000"));