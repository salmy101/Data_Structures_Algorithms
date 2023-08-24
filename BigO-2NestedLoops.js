function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 }
 
 logItems(10)

 // n *n aka n^2 O(n^2)
 // this is inefficient, need much more number of operations to complete code.