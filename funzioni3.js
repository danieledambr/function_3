function countNumber(num) {
     if (num < 10) {
          console.log(`il numero è composto da 1 cifra`);
          
     } else if (num < 100){
        console.log(`il numero è composto da 2 cifre`);
        
     } else if (num < 1000){
        console.log(`il numero è composto da 3 cifre`);
        
     } else if(num < 10000){
        console.log(`il numero è composto da 4 cifre`);
        
     } else {
        console.log(`numero troppo grande`);
        
     }
}


console.log(countNumber(12000));
