function merge(a, b) {
    if (!b) return a;
    let i = 0,
        j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) { i++; continue; }
        a.splice(i, 0, b[j++]);
    }
    while (j < b.length) a.splice(i++, 0, b[j++]);
    return a;
}

console.log(...merge([1, 2, 4], [1, 3, 4]));