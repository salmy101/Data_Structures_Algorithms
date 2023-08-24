function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 
     for(let k = 0; k < n; k++) {
         console.log(k)
     }
 }
 
 logItems(10)


 // 0(n^2) + O(n) => O(n^2 + n)
 //is n=100 => (1000 + 100)
 //the 100, or n is neglible/non-dominant, wont change much, 
 //therefore the fucniton is O(n^2)
 //We DROP THE NON-DOMIANTS