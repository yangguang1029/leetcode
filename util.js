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

var sortNumFunc = function(left,right) {
  return left- right;
}

var printArr = function(arr) {
  console.log(arr.join("->"));
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

  var getSubArray = function(arr, count) {  //从array中获取count个，内容相同即为一个，使用位运算
    var len = arr.length;
    if(count > arr || count <= 0) {
      return [[]];
    }
    var re = [];
    for(var i = 0, max = 1 << len; i < max; i++) {
      var tmp = [];
      for(var index = 0; index < len; index++) {
          var j = 1 << index;
          if(i & j) {
            tmp.push(arr[index]);
          }
      }
      if(count === tmp.length) {
        re.push(tmp);
      }
    }
    return re;
  }

  var addArr = function(arr) {
    if(arr.length === 0) {
      return 0;
    }
    return arr.reduce(function(a,b){
      return a+b;
    })
  }

  var getAllSubArray = function(arr) {
    var len = arr.length;
    var re = [];
    for(var i = 0, max = 1 << len; i < max; i++) {
      var tmp = [];
      for(var index = 0; index < len; index++) {
          var j = 1 << index;
          if(i & j) {
            tmp.push(arr[index]);
          }
      }
      re.push(tmp);
    }
    return re;
  }

  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }


function ListNode(val) {
     this.val = val;
     this.next = null;
 }