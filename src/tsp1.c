#include <stdio.h>
#include <math.h>

typedef enum { false, true } bool;
#define MIN(x, y) (((x) <(y)) ? (x) : (y))

int cities;
double dist[8][8];
bool visited[8];

double tsp(double currentDist, int prevCity, int visitedN) {
  if (visitedN == cities) {
    return currentDist;
  }

  double ret = INFINITY;
  for (int i = 0; i < cities; i++) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    visitedN++;
    double calDist =
      tsp(prevCity == -1 ? currentDist : currentDist + dist[prevCity][i],i, visitedN);
    ret = MIN(ret, calDist);

    visited[i] = false;
    visitedN--;
  }

  return ret;
}

int main() {
  int N;
  scanf("%d", &N);

  for (int i = 0; i < N; i++) {
    scanf("%d", &cities);

    for (int j = 0; j < cities; j++) {
      for (int k = 0; k < cities; k++) {
        scanf("%lf", &dist[j][k]);
      }
    }

    printf("%.10f\n", tsp(0.0, -1, 0));
    for (int j = 0; j < cities; j++) {
      visited[j] = false;
    }
  }
}
