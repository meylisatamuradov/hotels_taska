function computers(a){
    if(a/10 === 1){
        return `${a} компьютер`
    }

    return `${a} компьютеров`
};

( () => {
    const a = computers(1);
    console.log(a);
    const b = computers(43);
    console.log(b);
})();