var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Не підходить
    }
];

const emailRegex = /^[a-zA-Z0-9.]+@(gmail|yahoo)\.com$/;

var trustedEmails = [];

arr.forEach(obj => {
    if (obj.email && emailRegex.test(obj.email)) {
        trustedEmails.push(obj.email);
    }
});

console.log(trustedEmails); 