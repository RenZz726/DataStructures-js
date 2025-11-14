function isValidEmail(email) {
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || !domain || domain.indexOf(".") === -1) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  return true;
}

console.log(isValidEmail("user@gmail.com"));
console.log(isValidEmail("user@gamilcom"));

function removeDuplicates(str) {
  return [...new Set(str)];
}

function findDuplicates(arr) {
  return arr.filter((num, index) => {
    if (index === arr.indexOf(arr[index])) return num;
  });
}
console.log(findDuplicates([1, 2, 2, 5, 7, 7]));
