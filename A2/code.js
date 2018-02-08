//
// this is just a stub for a function you need to implement
//Sample text.
function getStats(txt) {
    txt = txt.toLowerCase();


    /*
     nChars: integer / worth 5 points
     Will contain the total number of characters in the text, including all white spaces.
    */

    let nChars_result = txt.length;

    /*
     nWords: integer / worth 10 points
     Will contain the total number of words in the text. For example, “Hello, World-1!” contains three words:
     “hello”, “world” and “1”.
    */

    nWords_regEx = /\b(\w)+\b/g;
    let nWords_result = txt.match(nWords_regEx).length;

    /*
     nLines: integer / worth 5 points
     Will contain the number of lines in the text. The only time this will be ‘0’ is when the text is empty. For
     example, the string "Hello\nWorld" contains 2 lines. The string "Hello\nWorld\n" contains 3 lines. The
     string "\n" contains 2 lines.
    */

    let nLines_result;
    if (txt === ""){
        nLines_result = 0;
    } else {
        nLines_result = txt.split('\n').length;
    }

    /*
     nNonEmptyLines: integer / worth 10 points
     Will contain the number of lines in the text containing at least one visible character. We will define visible
     character as any character other than whitespace (space, new-line and tab).
    */

    let nNonEmptyLines_result = 0;
    let lines = txt.split('\n');
    for(let i = 0; i < lines.length; i++){
        lines[i] = lines[i].replace(/\s/g, '');
        lines[i] = lines[i].replace(/\t/g, '');
        if(lines[i] !== ""){
            nNonEmptyLines_result++;
        }
    }

    /*
     maxLineLength: integer / worth 5 points
     Will contain the length of the longest line. Line length will be computed by counting the number of
     characters in the line, including any trailing white spaces, but excluding the newline character ‘\n’.
    */

    let nMaxLineLength_result = 0;
    let arrayOfLines = txt.split('\n');
    for(let i = 0; i < arrayOfLines.length; i++){
        if(arrayOfLines[i].length > nMaxLineLength_result){
            nMaxLineLength_result = arrayOfLines[i].length;
        }
    }

    /*
     averageWordLength: float / worth 10 points
     Will contain the average word length in the text. Example: text “Hello, World 1!” would have average
     word length equal to (5+5+1)/3 = 3.666666.
    */

    let arrayOfWords = txt.match(nWords_regEx);
    let lengthOfWords = 0;
    for(let i = 0; i < arrayOfWords.length; i++){
        lengthOfWords += arrayOfWords[i].length;
    }
    let avgWordLength_result = lengthOfWords / arrayOfWords.length;

    /*
     palindromes: array of strings / worth 15 points
     Will contain a list of unique palindromes in the text. Palindrome is a word with length > 2, which reads the
     same forward and backwards. Example: “Kayak, mom, MOM, XXx and 10z01 zz” contains 4 unique
     palindromes: [“kayak”, “mom”, “xxx”, “10x01”]. Palindromes should be reported in the same order they
     appear in the text.
    */

    let palindrome_result = [];
    txt = txt.match(nWords_regEx);
    let txtArr = txt;
    let reverse;
    for(let i =0; i < txtArr.length; i++){
        if (txtArr[i].length > 2){
            reverse = txtArr[i].split('').reverse().join('')
            if(txtArr[i] === reverse){
                if(!palindrome_result.includes(reverse)){
                    palindrome_result.push(txtArr[i].toLowerCase());
                }
            }
        }
    }

    /*
     longestWords: array of strings / worth 20 points
     Will contain the 10 longest words in the text. In case of ties, the secondary sorting criteria should be
     alphabetical sorting. Example: “0, XXX, YYYY, AAAA, BBB” will yield a list: [“aaaa”, “yyyy”, ”bbb”,
     “xxx”, ”0”].
    */

    let longestWords_result = [];
    txtArr.sort(function(a, b) {
        return b.length - a.length || a.localeCompare(b);
    });

    let uniqueArr = txtArr.filter(function(elem, pos) {
        return txtArr.indexOf(elem) == pos;
    });

    if(uniqueArr.length > 10){
        longestWords_result = uniqueArr.slice(0, 10);
    } else {
        longestWords_result = uniqueArr;
    }

    /*
     mostFrequentWords: array of strings / worth 20 points
     Will contain the 10 most frequent words in the text, concatenated with their respective frequencies. Use
     alphabetic sorting to to resolve frequency ties. The results will include the corresponding frequencies
     appended to the actual words surrounded by brackets. Example: the text “The,the,THE,and,AND,and,it,IT”
     should yield a list [“and(3)”, “the(3)”, “it(2)”].
    */

    return {
        nChars: nChars_result,
        nWords: nWords_result,
        nLines: nLines_result,
        nNonEmptyLines: nNonEmptyLines_result,
        maxLineLength: nMaxLineLength_result,
        averageWordLength: avgWordLength_result,
        palindromes: palindrome_result,
        longestWords: longestWords_result,
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

