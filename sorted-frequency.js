function sortedFrequency(arr, target) {

    if (target > arr[arr.length - 1] || target < arr[0]) return -1;

    let firstInd = findFirstOccurrence(arr, target);
    let lastInd = findLastOccurrence(arr, target);
    return lastInd - firstInd + 1;

}

function findFirstOccurrence(arr, target) {
    let low = 0, high = arr.length - 1
    while (true) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
            return mid;
        } else if (target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

function findLastOccurrence(arr, target) {
    let low = 0, high = arr.length - 1;
    while (true) {
        let mid = Math.floor((low + high) / 2)
        if ((mid === arr.length - 1 || target < arr[mid + 1]) && arr[mid] === target) {
            return mid;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
}

module.exports = sortedFrequency