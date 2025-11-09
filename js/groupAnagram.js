function groupAnagram(words) {
  const map = new Map();
  for (const word of words) {
    const key = word.split('').sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }
  return [...map.values()].sort((a, b) => b.length - a.length);
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));