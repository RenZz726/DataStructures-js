function validPalindrome(str) {
  str = str.toLowerCase();
  str = str.replaceAll(/[^a-z0-9]/g, "");

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
  }
  return true;
}
console.log(validPalindrome("A man, a plan, a canal: Panama"));
