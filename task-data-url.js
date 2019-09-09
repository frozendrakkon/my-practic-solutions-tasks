const data = [
    { name: "lastName", value: "M" },
    { name: "firstName", value: "Vy" },
    { name: "middleName", value: "Gr" },
    { name: "phone", value: "79178997773" },
    { name: "email", value: "test@email.com" },
    { name: "workRegion", value: "msk" }
];
let url = `https://vk.ru/profile?`;

data.forEach(({ name, value }) => (url += `${name}=${value}`));

const getParams = data.map(({ name, value }) => `${name}=${value}`).join("&");
const url = "https://vk.ru/profile?" + getParams;
// https://vk.ru/profile?lastName=M&firstName=Vy&middleName=Gr&phone=79178997773&email=test@email.com&workRegion=msk
