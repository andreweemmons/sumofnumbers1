//make sumFor, sumWhile, sumRecursion, and sumTheSimpleWay

const list = [5, 6, 7, 8];

function sumFor(list) {
  let total = 0;
  for (var i = 0; i < list.length; i++) {
    total+=list[i];
  }
  return total;
}

console.log("sumFor " + sumFor(list));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while(i<list.length) {
    total+=list[i];
    i++
  }
  return total;
}

console.log("sumWhile " + sumWhile(list));

function sumRecursion(list) {
  //use .slice(a, b) function to slice off 1 index at front
  if(list.length===0) {
    return 0;
  } else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}

console.log("sumRecursion " + sumRecursion(list));

function sumTheSimpleWay(list) {
  var sum = _.reduce(list, function(memo, num){ return memo + num; }, 0);
  return sum;
}

console.log("sumTheSimpleWay " + sumTheSimpleWay(list));

