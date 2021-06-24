function taylorA(n) {

    n = 3;
    let num, mul, cal, sum = 0;
    num = (n - 1) / (n + 1);


    for (let i = 1; i <= 1000; i++) {

        mul = (2 * i) - 1;
        cal = Math.pow(num, mul);
        cal = cal / mul;
        sum = sum + cal;

    }
    sum = 2 * sum;
    return sum;
}