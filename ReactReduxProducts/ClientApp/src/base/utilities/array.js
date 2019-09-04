export function chunkArrayInGroups(arr, size) {
    var outArray = [];
    for(var i = 0; i < arr.length; i += size) {
        outArray.push(arr.slice(i, i + size));
    }
    return outArray;
};
