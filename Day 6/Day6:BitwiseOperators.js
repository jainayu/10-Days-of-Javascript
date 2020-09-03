
function getMaxLessThanK( n, k) {
    var max = 1&2;
    for(let a=1; a<n; a++){
        for(let b=a+1; b<=n; b++){
            let and = a&b;
            if(max < and && and < k){
                max = and;
            }
        }
    }
    return max;
}

