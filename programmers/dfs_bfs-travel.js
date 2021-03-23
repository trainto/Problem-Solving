function solution(tickets) {
  const answers = [];

  const fly = (from, used, routes) => {
      routes.push(from);
      if (used.length === tickets.length) {
        answers.push(routes);
      }

      const availables = [];
      for (let i = 0; i < tickets.length; i += 1) {
          if (used.includes(i)) {
              continue;
          }

          if (tickets[i][0] === from) {
              availables.push(i);
          }
      }

      availables.forEach((ticket) => {
        fly(tickets[ticket][1], [...used, ticket], [...routes])
      });
  };

  fly('ICN', [], []);
  return answers.length === 1 ?
      answers[0] :
      answers.map((routes) => routes.join(',')).sort((a, b) => a < b ? -1 : 1)[0].split(',');
}


console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
console.log(solution([['ICN','AAA'],['ICN','AAA'],['ICN','AAA'],['AAA','ICN'],['AAA','ICN']]));
console.log(solution([['ICN','B'],['B','ICN'],['ICN','A'],['A','D'],['D','A']]));