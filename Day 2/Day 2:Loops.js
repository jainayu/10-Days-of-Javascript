

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(var ch in s){
        if(s[ch] == 'a' || 
        s[ch] == 'e' ||
        s[ch] == 'i' ||
        s[ch] == 'o' ||
        s[ch] == 'u'){
            console.log(s[ch]);
        }
    }
    for(var ch in s){
        if(s[ch] != 'a' &&
        s[ch] != 'e' &&
        s[ch] != 'i' &&
        s[ch] != 'o' &&
        s[ch] != 'u'){
            console.log(s[ch]);
        }
    }
}


