const range = function range(start, end, step) {
    let finalTab = [];

    if (step == null || step == 0) {
        if (start > end){
            step = -1
        }
        else{
            step = 1
        }
    }

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            finalTab.push(i);
        }
    } 
    else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            finalTab.push(i);

        }
    }

    return finalTab;
}

module.exports = {range}