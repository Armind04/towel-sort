
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let res = [];

  matrix.forEach((item, index) => {
    if(index % 2) item = item.reverse();
    item.forEach(i => res.push(i));
  })

  return res;
}
