function solution(genres, plays) {
  const memo = new Map();

  plays.forEach((c, i) => {
    const saved = memo.get(genres[i]);
    if (saved) {
      saved.tc = saved.tc + c;
      saved.songs.push({ id: i, count: c });
    } else {
      memo.set(genres[i], { tc: c, songs: [{ id: i, count: c }] });
    }
  });

  const sorted = Array.from(memo.values()).sort((a, b) => b.tc - a.tc);

  const ret = [];
  sorted.forEach((g) => {
    if (g.songs.length >= 2) {
      g.songs.sort((a, b) => (a.count === b.count ? b.id - a.id : a.count - b.count));
      ret.push(g.songs.pop().id);
      ret.push(g.songs.pop().id);
    } else {
      ret.push(g.songs[0].id);
    }
  });

  return ret;
}
