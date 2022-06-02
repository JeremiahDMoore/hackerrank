/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // we could set this to 3 given the problems constraints, but this allows changes
   let maxX = 3; // + (arr[0].length % 3)
   let maxY = 3; // + (arr.length % 3)
   let total = -64;  // has to be -64, but
  
   // begin at y == 0
   for (let y = 0; y <= maxY; y++) {
       for (let x = 0; x <= maxX; x++) {
           // sum the top of hourglass
           let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
           
           // get the middle of hourglass
           sum += arr[y+1][x+1];
           
           // sum the bottom of hourglass
           sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
           
           // don't store result to keep space complexity down
           if (total < sum)
                total = sum;
       }
   }
   
   return total;

}