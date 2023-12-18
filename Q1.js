let object = '{"FirstName":"Raja","SecondName":"Ram","Age":30,"City":"Mumbai","Country":"India"}'

let input = JSON.parse(object);
let input1 = Object.entries(input);

// ----------------------------------------------
//FOR IN
for(let value in input){
    console.log(input[value])
}; 
console.log('-----------------------------------')


// ---------------------------------------------
//FOR OF
function ForOf(input){
    for(let value of input){
        console.log(value)
    }
}
ForOf(input1)
console.log('-----------------------------------')


// -----------------------------------------------
// FOR LOOP
function ForLoop(input){
    for(let i=0; i<input.length; i++){
        console.log(input[i])
    }
}
ForLoop(input1)
console.log('-----------------------------------')


// -----------------------------------------------
// For each
function ForEach(input){
    input.forEach((x)=>{console.log(x)})
}
ForEach(input1)
