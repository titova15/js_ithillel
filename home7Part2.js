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

console.log('-------------------------------------------------'); 

const email2Regex = /^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)*@(gmail|yahoo)\.com$/; 
// доп варіант, якщо ми не хочемо, щоб адреса починалась із крапки, але могла її включати. звернемось до об'єкту 3

const isValidEmail = emailRegex.test(arr[2].email); 
console.log(isValidEmail);