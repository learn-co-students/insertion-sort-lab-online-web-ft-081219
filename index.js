function findMinAndRemove(array){
    let min = Math.min(...array)
    array.splice(array.indexOf(min), 1)
    return min
}

function insertionSort(array){
    let sorted = []
    while (array.length > 0) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
