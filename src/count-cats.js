const CustomError = require("../extensions/custom-error");

module.exports = function countCats( /* matrix */ array) {
    let flatArr = array.flat();
    let calc = 0;
    for (let i = 0; i < flatArr.length; i++) {
        if (flatArr[i] === '^^') {
            calc++;
        }
    }

    return calc;
};
