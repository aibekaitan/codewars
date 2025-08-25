function predictAge(...ages) {
  // Multiply each age by itself and sum them up
  const sumOfSquares = ages.map(age => age * age).reduce((sum, current) => sum + current, 0);

  // Take the square root of the result
  const squareRoot = Math.sqrt(sumOfSquares);

  // Divide by two and round down
  const predictedAge = Math.floor(squareRoot / 2);

  return predictedAge;
}