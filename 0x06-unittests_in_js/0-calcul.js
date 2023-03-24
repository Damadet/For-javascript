const calculateNumber = (a,b) =>{
    const c= Math.round(a);
    const d= Math.round(b);
    return Math.round(c+d);
};

module.exports = calculateNumber