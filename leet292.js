var canWinNim = function(n) {
    return n%4 !== 0;
};

/*
//首先找出规律

1->true
2->true
3->true
4->false
5->true
6->true
7->true
8->false

可以用动态规划去做，但是提示超时
再次观察下规律，就发现只要可以被4整除就必输

*/