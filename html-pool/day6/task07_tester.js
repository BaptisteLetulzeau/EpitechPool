import { arrayFiltering } from "./task07";

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arrayFiltering(tab, function (value) {
    return value % 3 === 0;
});
console.log(result);
