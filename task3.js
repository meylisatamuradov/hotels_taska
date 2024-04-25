const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const func = (a,b) => {
    const result = [];
    
    for(let i=a; i<=b; ++i){
        if(isPrime(i)){
            result.push(i)
        }
    }

    return result;
};

( () => {
    const a = func(11,50);
    console.log(a);
})();