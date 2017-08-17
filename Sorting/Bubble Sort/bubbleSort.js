//swaps items in-place
function swap(array, index1, index2){
    const hold = array[index1];
    array[index1] = array[index2];
    array[index2] = hold;
}

//the comparison function can be any function that returns true or false to determine the order of the items in the array
function compare(item1, item2){
    return item1 <= item2;
}

function bubbleSort (array){
    let sorted = false;  //allows us to break our loop early if no swaps were needed
    for (let end = array.length; end > 0 && !sorted; end--){  //loop through array until we've bubbled each item to the end, or the array is sorted
        sorted = true;  //reset showing we've made no changes
        for (let i = 0; i < end - 1; i++){
            if (!compare(array[i], array[i + 1])){  //compare the pairs
                swap(array, i, i + 1);  //if they don't match switch them
                sorted = false;  //signal that we have made changes
            }
        }
    }
    return array;
}
