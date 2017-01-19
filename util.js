var amn = function(m,n) {   // A(m,n)
    if(m < n) {
        return 0;
    }
    var re = 1;
    for(var i = m-n+1; i <=m; i++) {
        re *= i;
    }
    return re;
}