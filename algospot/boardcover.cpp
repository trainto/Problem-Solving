#include <iostream>
#include <vector>

using namespace std;

const int block_types[4][3][2] = {
  {{0, 0}, {1, 0}, {1, 1}},
  {{0, 0}, {1, 0}, {1, -1}},
  {{0, 0}, {0, 1}, {1, 1}},
  {{0, 0}, {1, 0}, {0, 1}}
};

bool insert_block(vector< vector<int> > &matrix, int type, int x, int y) {
  for (int i = 0; i < 3; i++) {
    int nx = x + block_types[type][i][0];
    int ny = y + block_types[type][i][1];

    if (nx >= matrix.size() || ny < 0 || ny >= matrix[nx].size() || matrix[nx][ny]) {
      return false;
    }
  }

  matrix[x][y] = 1;
  matrix[x + block_types[type][1][0]][y + block_types[type][1][1]] = 1;
  matrix[x + block_types[type][2][0]][y + block_types[type][2][1]] = 1;
  return true;
}

void remove_block(vector< vector<int> > &matrix, int type, int x, int y) {
  matrix[x][y] = 0;
  matrix[x + block_types[type][1][0]][y + block_types[type][1][1]] = 0;
  matrix[x + block_types[type][2][0]][y + block_types[type][2][1]] = 0;
}

int cover(vector< vector<int> > &matrix, int free_space) {
  if (free_space == 0) {
    return 1;
  }

  if (free_space < 3) {
    return 0;
  }

  // Find target coords for inserting
  int target_x = -1;
  int target_y = -1;
  for (int i = 0, i_size = matrix.size(); i < i_size; i++) {
    for (int j = 0, j_size = matrix.at(i).size(); j < j_size; j++) {
      if (matrix.at(i).at(j) == 0) {
        target_x = i;
        target_y = j;

        j = matrix.at(i).size();
        i = matrix.size();
      }
    }
  }

  int ret = 0;
  for (int i = 0; i < 4; i++) {
    if (insert_block(matrix, i, target_x, target_y)) {
      ret += cover(matrix, free_space - 3);
      remove_block(matrix, i, target_x, target_y);
    }
  }

  return ret;
}

int main() {
  int c;
  cin >> c;

  for (int i = 0; i < c; i++) {
    int h, w;
    cin >> h >> w;
    cin.get();
    vector< vector<int> > matrix;
    int free_space = 0;
    for (int j = 0; j < h; j++) {
      string temp;
      getline(cin, temp);
      vector<int> row;
      for (int k = 0; k < temp.size(); k++) {
        if (temp.at(k) == '.') {
          row.push_back(0);
          free_space++;
        } else {
          row.push_back(-1);
        }
      }
      matrix.push_back(row);
    }

    if (free_space % 3 != 0) {
      cout << 0 << endl;
      continue;
    }

    cout << cover(matrix, free_space) << endl;
  }

  return 0;
}