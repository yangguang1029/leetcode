var islandPerimeter = function(grid){
	var rlen = grid.length;
    if(rlen <= 0) {
        return 0;
    }
    var clen = grid[0].length;
    var re= 0;
    for(var row = 0 ; row < rlen; row++) {
        var data = grid[row];
        for(var col = 0; col < clen; col++) {
            var cell = data[col];
            if(cell === 0) {
                continue;
            }
            if(col === 0 || data[col - 1] === 0) re += 1;
            if(row === 0 || grid[row - 1][col] === 0) re += 1;
            if(col === clen - 1 || data[col + 1] === 0) re+= 1;
            if(row === rlen - 1 || grid[row + 1][col] === 0) re+=1;
        }
    }
    return re;
}