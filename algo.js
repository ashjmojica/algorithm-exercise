function findLetters2(string) {
  const hashmap = {};
  for (let index = 0; index < string.length; index++) {
    const letter = string[index];
    if (!hashmap[letter]) {
      hashmap[letter] = 1;
    } else {
      hashmap[letter]++;
    }
  }
  return hashmap;
}
