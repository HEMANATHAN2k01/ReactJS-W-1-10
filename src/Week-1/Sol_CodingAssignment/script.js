let words = (string) => {
    var arr = string.replace(/[.,]/g,' ').split();
    return arr;
}

let wordFrequency = (arr) => {
    const array=arr[0].trim().split(" ");
    
    let map={};
    
    array.map(item => {
        if(map[item]){
            map[item]+=1;
        }else {
            map[item]=1;
        }
    });
    return map;
};


var strings=words("Duis Excepteur Lorem Duis Excepteur Lorem");
console.log(JSON.stringify(wordFrequency(strings)));