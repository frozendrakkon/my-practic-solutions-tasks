const reformData = [
    { name: "lastName" },
    { name: "firstName", value: "Vy" },
    { name: "middleName", value: "Gr" },
    { name: "phone", value: "79178997773" },
    { name: "email" },
    { name: "workRegion", value: "msk" }
];

const arr = [];

reformData.forEach(({ name, value }) => {
    if (value !== undefined) {
        arr.push({ name, value });
    }
});
console.log(reformData);
console.log(arr);
