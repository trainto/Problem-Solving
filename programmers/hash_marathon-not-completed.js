function solution(participant, completion) {
  const map = new Map();
  completion.forEach((c) => {
    const saved = map.get(c);
    if (saved) {
      map.set(c, saved + 1);
    } else {
      map.set(c, 1);
    }
  });

  for (let i = 0; i < participant.length; i += 1) {
    const saved = map.get(participant[i]);
    if (saved) {
      map.set(participant[i], saved - 1);
    } else {
      return participant[i];
    }
  }
}
