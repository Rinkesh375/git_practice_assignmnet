
let factor = 0;
let num = 21
for(let i = 1;i<=num;i++){
    if(num%i===0){
        factor++
      
    }
}
if(factor===2){
    console.log("Prime")
}
else{
    console.log('Not Prime')
}