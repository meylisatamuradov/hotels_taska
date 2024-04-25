const func = (arr) => {
    let devisors = [];
    const min = Math.min.apply(null, arr);
    
    for(let i=2; i<=min; ++i){
        let isDevisor = false;

        for(let j=0; j< arr.length; ++j){
            if(arr[j]%i !== 0){
                break;
            }

            if(j === arr.length-1){
                isDevisor = true;
            }
        }

        if(isDevisor){
            devisors.push(i);
            isDevisor = false;
        }
    }

    return devisors;
};

( () => {
    const a = func([42,12,18, 20]);
    console.log(a);
})();