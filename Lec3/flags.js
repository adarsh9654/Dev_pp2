let fs = require ("fs");
let f1KaData = fs.readFileSync("./file1.txt");
f1KaData = f1KaData+"";
let data=f1KaData.split("\r\n");
console.log(data);
let removedSpaces = [];
let emptyPushed = false;
//for s 
function removeLargeSpaces(data){
    for(let i=0 ; i<data.length ; i++){
        if( data[i] == '' && !emptyPushed ){
            removedSpaces.push(data[i]);
            emptyPushed = true;
        }
        else if(data[i] != ''){
            removedSpaces.push(data[i]);
        }
    }
}
removeLargeSpaces(data);
let joinedString = removedSpaces.join("\n");
console.log(joinedString);
//for b 
let count = 1;
function addLineNumberToNonEmptyLines(data){
    for(let i=0 ; i<data.length ;i++){
        if(data[i] != ''){
            data[i] = `${count}. ${data[i]}`;
            count++;
        }
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}

addLineNumberToNonEmptyLines(data);
//for n
function addLineNumberToAllLines(data){
    for(let i=1 ; i<data.length+1 ; i++){
        data[i-1] = `${i}. ${data[i-1]}`;
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
}
addLineNumberToAllLines(data);