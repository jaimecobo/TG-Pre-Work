function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);

/*
We can also use the return value of a function inside another function.
These functions being called within another function are often referred to as helper functions.
*/
