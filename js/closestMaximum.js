function closest(n, m) {
    count1 = 0;
    while(n  % m === 0) {
        count1 = n;
        n--;
    }
    console.log(count1);
}

closest(13, 4);

// let n2 = (n * m) > 0 ?
//         (m * (q + 1)) : (m * (q - 1));