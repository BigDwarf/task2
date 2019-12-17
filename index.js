function shiftLeft (arr) {
    for(let i = 0; i < arr.length - 1; ++i){
        if(arr[i] === arr[i+1]){
            arr[i] += arr[i+1];
            arr.splice(i+1, 1);
        }
    }
    return arr;
}

function shiftRight(arr) {
    return shiftLeft(arr.reverse()).reverse();
}

function isShiftable(arr){
    for(let i = 0; i < arr.length-1; ++i){
        if(arr[i] === arr[i+1]){
            return true;
        }
    }
    return false;
}

function arrayShiftInternal(arr, shiftCount, path, paths){
    if(isShiftable(arr)){
        let leftShifted = shiftLeft([...arr]);
        let rightShifted = shiftRight([...arr]);

        arrayShiftInternal(shiftLeft([...arr]), shiftCount + (arr.length - leftShifted.length),
            [...path, "left"], paths);
        arrayShiftInternal(shiftRight([...arr]), shiftCount + (arr.length - rightShifted.length),
            [...path, "right"], paths);
    }
    else{
        paths.push({"path": path, "shiftCount": shiftCount});
    }
}

function arrayShift(arr){
    let path = [];
    let paths = [];
    let shiftCount = 0;
    let max = 0;
    let indexMax = 0;

    arrayShiftInternal(arr, shiftCount, path, paths);
    for(let i = 0; i < paths.length; ++i) {
        if(paths[i].shiftCount > max){
            max = paths[i].shiftCount;
            indexMax = i;
        }
    }
    return paths[indexMax]; // just return first possible path
}
module.exports = {
    arrayShift,
    shiftLeft,
    shiftRight,
    isShiftable
};

console.log(arrayShift([2, 2, 4]));
console.log(arrayShift([2, 2, 2, 2]));
console.log(arrayShift([4, 4, 4, 8]));
console.log(arrayShift([2, 2, 2, 2, 2, 4, 4]));