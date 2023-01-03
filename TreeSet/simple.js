class TreeSet {
  constructor() {
    this.tree = new Map();
  }

  add(x) {
    this.tree.set(x, x);
  }

  remove(x) {
    this.tree.delete(x);
  }

  higher(x) {
    let res = null;
    for (const [key, value] of this.tree) {
      if (key > x) {
        if (res === null || key < res) {
          res = key;
        }
      }
    }
    return res;
  }
}
