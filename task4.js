const getSpace = (len) =>{
   return ' ' + new Array(len + 1).join(' ')
}

const func = (a) => {  
    let result = '';
    const maxNumLength = (a*a).toString().length;

    for(let i=0; i<=a; ++i){
        for(let j=0; j<=a; ++j){
            if(i !==0 && !j==0){
                const numLength = (i*j).toString().length;

                result += getSpace(maxNumLength-numLength) + i*j;
            } 
            else if( i ===0 && j===0){
                result += getSpace(maxNumLength);
            }
            else if(i===0){
                const numLength = j.toString().length;
                result += getSpace(maxNumLength-numLength) + j;
            } else if( j===0){
                const numLength = i.toString().length;
                result += getSpace(maxNumLength-numLength) + i;
            }
        }

        result += '\n'
    }

    return result;
};

( () => {
    const a = func(5);
    console.log(a);
})();