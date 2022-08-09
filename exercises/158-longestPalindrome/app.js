function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  sentence = sentence.toLowerCase();
  var max_length = 0,
  maxp = '';

  for(var i=0; i < sentence.length; i++) 
  {
  var subs = sentence.substr(i, sentence.length);

  for(var j=subs.length; j>=0; j--) 
  {
    var sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;

    if (isPalindrome(sub_subs_str))
    {
      if (sub_subs_str.length > max_length) 
      {
        max_length = sub_subs_str.length;
        maxp = sub_subs_str;
      }
    }
  }
}

  return maxp;
  }

function reverseString(string) {
  return string.split("").reverse().join("");
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word == reverseString(word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}