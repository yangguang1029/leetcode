/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var row = {};
    var re = [];

    row['q'] = row['w'] = row['e'] = row['r'] = row['t'] = row['y'] = row['u'] = row['i'] = row['o'] = row['p'] = 1;
    row['a'] = row['s'] = row['d'] = row['f'] = row['g'] = row['h'] = row['j'] = row['k'] = row['l'] =2;
    row['z'] = row['x'] = row['c'] = row['v'] = row['b'] = row['n'] = row['m'] =3;

    
    for(var i = 0, len = words.length; i < len; i++) {
    	var word = words[i].toLowerCase();
    	var crow = -1;
    	for(var j = 0, wlen = word.length; j < wlen; j++) {
    		var c = word[j];
    		if(j === 0) {
    			crow = row[c];
    		}else{
    			if(crow !== row[c]) {
    				break;
    			}
    		}
    	}
    	if(j === wlen) {
    		re.push(words[i]);
    	}
    	
    }
    return re;
};

var fuck = findWords(["Hello","Alaska","Dad","Peace"]);

for(var i = 0, len = fuck.length; i < len; i++) {
	console.log(fuck[i])
}