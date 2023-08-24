function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             for(let k = 0; k < n; k++) {
                 console.log(i, j, k) 
             }       
         }       
     } 
 }
 
 logItems(10)

  // n * n * n aka n^3  STILL called O(n^2)
 // this is inefficient, need much more number of operations to complete code.