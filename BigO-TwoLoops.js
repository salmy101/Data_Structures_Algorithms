function logItems(n) {
     for(let i = 0; i < n; i++) {
        console.log(i) 
     }
 
     for(let j = 0; j < n; j++) {
        console.log(j) 
     }       
 }
 
 logItems(3)

 //  this is a funciton that runs n + n number of times, aka 2n, BUT we always
 //DROP THE CONSTANTS, it is a O(n) funcition, NOT a O(2n)