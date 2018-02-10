// SENG 513 - A2
// Name: JENNY LE
// UCID: 10152816
// Template code by Pavol Federl, Editted by Jenny Le

function getStats(txt) {
    txt = txt.toLowerCase();
    return {
      nChars: get_nChars(txt),
      nWords: get_nWords(txt),
      nLines: get_nLines(txt),
      nNonEmptyLines: get_nNonEmptyLines(txt),
      maxLineLength: get_maxLineLength(txt),
      averageWordLength: get_averageWordLength(txt),
      palindromes: get_palindromes(txt),
      longestWords: get_longestWords(txt),
      mostFrequentWords: get_mostFrequentWords(txt)
    };
  }
  
  function get_arrOfWords(txt) {
    let nWords_regEx = /\b[^\W_]+\b/g;
    let result = txt.match(nWords_regEx);
    if (result === null) {
      return null;
    } else {
      return result;
    }
  }
  
  function get_arrOfWordsLines(txt) {
    return txt.split("\n");
  }
  
  /*
   nChars: integer / worth 5 points
   Will contain the total number of characters in the text, including all white spaces.
   */
  function get_nChars(txt) {
    return txt.length;
  }
  
  /*
   Will contain the total number of words in the text. For example, “Hello, World-1!” contains three words:
   “hello”, “world” and “1”.
   */
  function get_nWords(txt) {
    let text = get_arrOfWords(txt);
    if (txt === "") {
      return 0;
    } else if (text === null) {
      return 0;
    } else {
      return text.length;
    }
  }
  
  /*
   nLines: integer / worth 5 points
   Will contain the number of lines in the text. The only time this will be '0' is when the text is empty. For
   example, the string "Hello\nWorld" contains 2 lines. The string "Hello\nWorld\n" contains 3 lines. The
   string "\n" contains 2 lines.
   */
  function get_nLines(txt) {
    let nLines_result;
    if (txt === "") {
      nLines_result = 0;
    } else {
      nLines_result = get_arrOfWordsLines(txt).length;
    }
    return nLines_result;
  }
  
  /*
   nNonEmptyLines: integer / worth 10 points
   Will contain the number of lines in the text containing at least one visible character. We will define visible
   character as any character other than whitespace (space, new-line and tab).
   */
  function get_nNonEmptyLines(txt) {
    let nNonEmptyLines_result = 0;
    let lines = get_arrOfWordsLines(txt);
    for (let i = 0; i < lines.length; i++) {
      lines[i] = lines[i].replace(/\s/g, "");
      lines[i] = lines[i].replace(/\t/g, "");
      if (lines[i] !== "") {
        nNonEmptyLines_result++;
      }
    }
    return nNonEmptyLines_result;
  }
  
  /*
   maxLineLength: integer / worth 5 points
   Will contain the length of the longest line. Line length will be computed by counting the number of
   characters in the line, including any trailing white spaces, but excluding the newline character '\n'.
   */
  function get_maxLineLength(txt) {
    let nMaxLineLength_result = 0;
    let lines = get_arrOfWordsLines(txt);
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length > nMaxLineLength_result) {
        nMaxLineLength_result = lines[i].length;
      }
    }
    return nMaxLineLength_result;
  }
  
  /*
   averageWordLength: float / worth 10 points
   Will contain the average word length in the text. Example: text “Hello, World 1!” would have average
   word length equal to (5+5+1)/3 = 3.666666.
   */
  function get_averageWordLength(txt) {
    if (txt === "") {
      return 0;
    } else {
      let text = get_arrOfWords(txt);
      if (text === null) {
        return 0;
      }
      let lengthOfWords = 0;
      for (let i = 0; i < text.length; i++) {
        lengthOfWords += text[i].length;
      }
      return lengthOfWords / text.length;
    }
  }
  
  /*
   palindromes: array of strings / worth 15 points
   Will contain a list of unique palindromes in the text. Palindrome is a word with length > 2, which reads the
   same forward and backwards. Example: “Kayak, mom, MOM, XXx and 10z01 zz” contains 4 unique
   palindromes: [“kayak”, “mom”, “xxx”, “10x01”]. Palindromes should be reported in the same order they
   appear in the text.
   */
  function get_palindromes(txt) {
    if (txt === "") {
      return [];
    } else {
      let palindrome_result = [];
      let text = get_arrOfWords(txt);
      if (text === null) {
        return [];
      }
      let reverse;
      for (let i = 0; i < text.length; i++) {
        if (text[i].length > 2) {
          reverse = text[i]
            .split("")
            .reverse()
            .join("");
          if (text[i] === reverse) {
            if (!palindrome_result.includes(reverse)) {
              palindrome_result.push(text[i].toLowerCase());
            }
          }
        }
      }
      return palindrome_result;
    }
  }
  
  /*
   longestWords: array of strings / worth 20 points
   Will contain the 10 longest words in the text. In case of ties, the secondary sorting criteria should be
   alphabetical sorting. Example: “0, XXX, YYYY, AAAA, BBB” will yield a list: [“aaaa”, “yyyy”, ”bbb”,
   “xxx”, ”0”].
   */
  function get_longestWords(txt) {
    if (txt === "") {
      return [];
    } else {
      let longestWords_result = [];
      let text = get_arrOfWords(txt);
  
      if (text === null) {
        return [];
      }
      text.sort(function(a, b) {
        return b.length - a.length || a.localeCompare(b);
      });
  
      let uniqueArr = text.filter(function(elem, pos) {
        return text.indexOf(elem) === pos;
      });
  
      if (uniqueArr.length > 10) {
        longestWords_result = uniqueArr.slice(0, 10);
      } else {
        longestWords_result = uniqueArr;
      }
      return longestWords_result;
    }
  }
  
  /*
   mostFrequentWords: array of strings / worth 20 points
   Will contain the 10 most frequent words in the text, concatenated with their respective frequencies. Use
   alphabetic sorting to to resolve frequency ties. The results will include the corresponding frequencies
   appended to the actual words surrounded by brackets. Example: the text “The,the,THE,and,AND,and,it,IT”
   should yield a list [“and(3)”, “the(3)”, “it(2)”].
   */
  function get_mostFrequentWords(txt) {
    if (txt === "") {
      return [];
    } else {
      let text = get_arrOfWords(txt);
      if (text === null) {
        return [];
      }
      let freq = [];
      let mostFrequentWords_result = [];
      text.forEach(function(word) {
        if (word in freq) {
          freq[word]++;
        } else {
          freq[word] = 1;
        }
      });
  
      for (let i in freq) {
        mostFrequentWords_result.push(i + "(" + freq[i] + ")");
      }
  
      mostFrequentWords_result.sort(function(first, second) {
        word_regEx1 = first.match(/\((.+)\)/)[0];
        word_regEx2 = second.match(/\((.+)\)/)[0];
        word_regEx1 = word_regEx1.substring(1, word_regEx1.length - 1);
        word_regEx2 = word_regEx2.substring(1, word_regEx2.length - 1);
        return word_regEx2 - word_regEx1 || first.localeCompare(second);
      });
      return mostFrequentWords_result.splice(0, 10);
    }
  }