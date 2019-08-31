// const data = [
//     { name: "lastName", value: "M" },
//     { name: "firstName", value: "Vy" },
//     { name: "middleName", value: "Gr" },
//     { name: "phone", value: "79178997773" },
//     { name: "email", value: "test@email.com" },
//     { name: "workRegion", value: "msk" }
// ];
// let url = `https://vk.ru/profile?`;

// data.forEach(({ name, value }) => (url += `${name}=${value}`));

// const getParams = data.map(({ name, value }) => `${name}=${value}`).join("&");
// const url = "https://vk.ru/profile?" + getParams;

// https://vk.ru/profile?lastName=M&firstName=Vy&middleName=Gr&phone=79178997773&email=test@email.com&workRegion=msk

// const reformData = [
//     { name: "lastName" },
//     { name: "firstName", value: "Vy" },
//     { name: "middleName", value: "Gr" },
//     { name: "phone", value: "79178997773" },
//     { name: "email" },
//     { name: "workRegion", value: "msk" }
// ];

// const arr = [];

// reformData.forEach(({ name, value }) => {
//     if (value !== undefined) {
//         arr.push({ name, value });
//     }
// });
// console.log(reformData);
// console.log(arr);

const reformData = [
    { name: "lastName" },
    { name: "firstName", value: "Vy" },
    { name: "middleName", value: "Gr" },
    { name: "phone", value: "79178997773" },
    { name: "email" },
    { name: "workRegion", value: "msk" }
];

const reformDataResult = reformData.filter(({ name, value }) => {
    return value !== undefined;
});
console.log(reformDataResult);
