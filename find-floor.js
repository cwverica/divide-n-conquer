function findFloor(arr, target) {
    if (target < arr[0]) return -1;
    if (target > arr[arr.length - 1]) return arr[arr.length - 1];

    let low = 0, high = arr.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] <= target && arr[mid + 1] > target) {
            return arr[mid];
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

module.exports = findFloor