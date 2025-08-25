function alphabetWar(fight) {
  const left = { w: 4, p: 3, b: 2, s: 1 };
  const right = { m: 4, q: 3, d: 2, z: 1 };
  
  let leftScore = 0;
  let rightScore = 0;
  
  for (let char of fight) {
    if (left[char]) leftScore += left[char];
    if (right[char]) rightScore += right[char];
  }
  
  if (leftScore > rightScore) return "Left side wins!";
  if (rightScore > leftScore) return "Right side wins!";
  return "Let's fight again!";
}