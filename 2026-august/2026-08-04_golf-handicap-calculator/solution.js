function calculateHandicap(scores, pars) {

  let n = scores.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += (scores[i] - pars[i]);
  }

  return (sum/n).toFixed(1);
}

console.log(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]));
