function TaylorA(x) {

    for (i = 0; i < 4; i++) {
        x = i;
        return Math.sqrt(1 - x);
    }
    console.log(TaylorA(1));

}
module.exports.TaylorA = TaylorA;