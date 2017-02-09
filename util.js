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

var stringToDic = function(s) {
    var dic = {};
    for(var i = 0, len = s.length; i < len; i++) {
      var c = s[i];
      var tmp = dic[c];
      if(tmp) {
        dic[c] = tmp + 1;
      }else {
        dic[c] = 1;
      }
    }
    return dic;
  }

  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }


function ListNode(val) {
     this.val = val;
     this.next = null;
 }