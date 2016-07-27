const CompareNumbers = require('./compare-numbers');

function compare(input,answer){
    const result = CompareNumbers.caculate(input,answer);

    return result;
}

exports.compare = compare;