const reformData = [
    { name: "lastName" },
    { name: "firstName", value: "Vy" },
    { name: "middleName", value: "Gr" },
    { name: "phone", value: "79178997773" },
    { name: "email" },
    { name: "workRegion", value: "msk" }
];

const fun = ({ value }) => value !== undefined;
const reformDataResult = reformData.filter(fun);

console.log(reformDataResult);
