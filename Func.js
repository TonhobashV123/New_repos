function TaylorA(x, eps) {
    var s = 0
    var n = 0
    var an = 1
    while (Math.abs(an) > Math.abs(eps)) {
        s += an
        n++
        an *= -x * x / (2 * n - 1) / (2 * n)
    }
    return s
}
console.log(TaylorA(0.7, 0)) /// 0,76
module.exports.TaylorA = TaylorA;
console.log(function TaylorA(1));
}