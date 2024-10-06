export function arrayFiltering(array, test) {
    let tab = []
    
    for (let number of array) {
        if (test(number)) {
            tab.push(number)
        }
    }

    return tab;
}