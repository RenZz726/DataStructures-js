function getUniquePermutations(str) {
  if (str.length === 1) return [str];
  const perms = new Set(); // use Set to avoid duplicates

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    for (let perm of getUniquePermutations(remaining)) {
      perms.add(currentChar + perm);
    }
  }

  return [...perms];
}

console.log(getUniquePermutations("aab"));
