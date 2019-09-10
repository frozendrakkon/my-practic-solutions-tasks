const data = [
    { name: "lastName", value: "M" },
    { name: "firstName", value: "Vy" },
    { name: "middleName", value: "Gr" },
    { name: "phone", value: "79178997773" },
    { name: "email", value: "test@email.com" },
    { name: "workRegion", value: "msk" }
];
let some = {};
data.forEach(({ name, value }) => {
    some = { ...data[(value, name)] };
});
console.log(some);

// const some  = {
//     lastName: 'M',
//     firstName: 'Vy',
//     middleName: 'Gr',
//     phone: 'tel:79178997773',
//     email: 'mailto:test@email.com',
//     workRegion: 'msk'
