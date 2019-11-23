const data = [
    { name: "lastName", value: "M", id: 1 },
    { name: "firstName", value: "Vy", id: 2 },
    { name: "middleName", value: "Gr", id: 3 },
    { name: "phone", value: "79178997773", id: 4 },
    { name: "email", value: "test@email.com", id: 5 },
    { name: "workRegion", value: "msk", id: 6 }
];

const some = data.reduce((acc, cur) => {
    return { ...acc, [cur.name]: cur.value };
}, {});

console.log(some);
