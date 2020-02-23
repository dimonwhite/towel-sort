
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return (matrix) ? matrix.map((item, i) => {
        return (i % 2) ? item.reverse() : item;
    }).flat() : [];
}
