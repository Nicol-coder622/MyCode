function reverseArray(array){
    let result = [];
    for (let i = array.length - 1;i >= 0; i--){
        result.push(array[i]);
    }
    return result;
}
function reverseArrayInPlace(array){
    for (let i = 0;i <Math.floor(array.length / 2); i++){
        let oppositeIndex = array.length - 1 - i;
        let temp = array[i];
        array[i] = array[oppositeIndex];
        array[oppositeIndex] = temp;
    }
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);