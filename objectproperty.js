const students = [
    {id : 21, name : 'Omar Sunny'},
    {id : 31, name : 'Mannaaaaaa'},
    {id : 41, name : 'Moyouri'},
    {id : 71, name : 'DeepJol'}
];

// const names = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     names.push(element.name);
// }

// console.log(names);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const sFilter = students.filter( s => s.id > 40);
const sFind = students.find( s => s.id > 40);
console.log(sFilter);
