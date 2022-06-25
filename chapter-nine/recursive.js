function prints(n) {
    if (n == 5) {
        return;
    }
    console.log(n)
    prints(n - 1);
}
prints(10)