function invertedRightHalfPy(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
const Rows = 6;
invertedRightHalfPy(Rows)