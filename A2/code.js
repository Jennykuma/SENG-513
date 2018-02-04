//
// this is just a stub for a function you need to implement
//
function getStats(txt) {

    let nChars_var = 0
    nChars_var = txt.length

    let nWords_var = txt.length
    for (var i = 0; i < nChars_var; i++) {
        if (((txt.charCodeAt(i) >= 65) && (txt.charCodeAt(i) <= 90)) || ((txt.charCodeAt(i) >= 97) && (txt.charCodeAt(i) <= 122))
            || ((txt.charCodeAt(i) >= 48) && (txt.charCodeAt(i) <= 57))
        ){
            nWords_var -= 1
        }
    }

    return {
        nChars: nChars_var,
        nWords: nWords_var,
        nLines: 10,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

