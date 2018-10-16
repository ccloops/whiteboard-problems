function range(start, end, step) {
  let newArray = [];
  if (arguments.length > 2) {
    if (step > 0) {
      for (let i = start; i <= end; i += step)
        newArray.push(i);
      } else {
            for (let i = start; i >= end; i -= Math.abs(step)) {
              newArray.push(i);
            }
          }
      } else {
        for (let i = start; i <= end; i++) {
          newArray.push(i);
        }
      }
      return newArray;
    }

    function sum(arr) {
      let newNumber = 0;
      for (let i = 0; i < arr.length; i++) {
        newNumber += arr[i];
      }
      return newNumber;
    }


    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
// → 55


//     function range(start, end, step) {
//       if (step == null) step = 1;
//       var array = [];

//       if (step > 0) {
//         for (var i = start; i <= end; i += step)
//           array.push(i);
//       } else {
//         for (var i = start; i >= end; i += step)
//           array.push(i);
//       }
//       return array;
//     }

//     function sum(array) {
//       var total = 0;
//       for (var i = 0; i < array.length; i++)
//         total += array[i];
//       return total;
//     }

//     console.log(range(1, 10))
//     // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     console.log(range(5, 2, -1));
//     // → [5, 4, 3, 2]
//     console.log(sum(range(1, 10)));
// // → 55