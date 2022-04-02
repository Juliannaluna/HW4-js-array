console.log('------------- # 5')

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { console.log("Вы согласились."); }, // нужно обновить данное место
    () => { console.log("Вы отменили выполнение."); } // нужно обновить данное место
);

console.log('------------- # 6')

let phrase = 'my-short-string';
let arr = phrase.split('-');
console.log(arr);

console.log('------------- # 7')

let arr2 = ['JavaScript', 2015];
let str = arr2.join(' ');
console.log( str );

console.log('------------- # 8')
let users = [ 
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
let userCollection = users.filter(function (item) { return item.age < 20 });
console.log(userCollection); 

console.log('------------- # 9')
let users2 = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = users2.map(item => item.name);
console.log( names );

console.log('------------- # 10')
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
        }
    }
}
let arr3 = [5, 3, 8, 1];
filterRangeInPlace(arr3, 1, 4);
console.log( arr3 );

console.log('------------- # 11')
const splitter = (string, spl) => string.split(spl);
console.log(splitter('Hello_world', '_'))

console.log('------------- # 12')
function slArray(arr, startIndex, endIndex) {
    return arr.slice(startIndex, endIndex);
}
let arr4 = [5, 3, 8, 1];
let range = slArray(arr4, 1, 4);
console.log( range );
console.log( arr4 );

console.log('------------- # 13')

function sum(...args) {
    let result = 0;
    for (let value of args) {
        result += value;
    }
    return result;
}
console.log(sum(1, 4, 5))
