const s1="hi";
const str1=[...s1];
let arr1= [1,2,3];
let arr2=['Hello','world'];


let result=(str,array1,array2)=>str.concat(array1,array2);

console.log(result(str1,arr1,arr2));

