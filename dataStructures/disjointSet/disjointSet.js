class DisjointSet {
  constructor() {
    this.parent = [];
    this.rank = [];
    this.size = [];
  }

  makeSet(x) {
    if (this.parent[x] !== undefined) return;
    this.parent[x] = x;
    this.rank[x] = 0;
    this.size[x] = 1;
  }

  findRoot(x) {
    if (this.parent[x] === x) {
      return x;
    } else {
      this.parent[x] = this.findRoot(this.parent[x]);
      return this.parent[x];
    }
  }

  /**
   * by rank
   */
  union(x, y) {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);

    if (rootX === rootY) return;

    const rankX = this.rank[rootX];
    const rankY = this.rank[rootY];

    if (rankX < rankY) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    } else if (rankX > rankY) {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    } else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
      this.rank[rootX] += 1;
    }
  }

  /**
   *  union by size - for learning purposes
   */
  _unionBySize(x, y) {
    const rootX = this.findRoot(x);
    const rootY = this.findRoot(y);

    if (rootX === rootY) return;

    const sizeX = this.size[rootX];
    const sizeY = this.size[rootY];

    if (sizeX < sizeY) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];

      if (sizeX === sizeY) {
        this.rank[rootY] += 1;
      }
    } else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];

      if (sizeX === sizeY) {
        this.rank[rootX] += 1;
      }
    }
  }
}
