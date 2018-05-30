Array.prototype.isDual = function(){
    let len = this.length;
    if (len == 0) 
        return true;
    if (len % 2 != 0 )
        return false;
    let temp = this[0] + this[1];
    for (let i = 2; i < len; i += 2 ) {
        if (this[i] + this[i + 1] != temp )
            return false;
    }
    return true;
}

var array = new Array(3,1,4,0);
console.log(array.isDual());