function countZeroes(arr) {
    if (arr[0] === 0) return arr.length;
    if (arr[arr.length - 1] === 1) return 0;

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx;


    while (leftIdx < rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] === 1) {
            leftIdx = middleIdx;
            if (rightIdx - leftIdx === 1) break;
        } else {
            rightIdx = middleIdx;
        }
    }

    return arr.length - (middleIdx + 1);
}

module.exports = countZeroes