/** 
*
*   This is an implementation of a Red-Black Tree to use for DA-Practice in JS
* */

Class RbNode {
    static get RED() {
        return 'RED'
    }

    static get BLACK(){
        return 'BLACK'
    }

    constructor(value, color, parent = null) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
}

class RbTree {
    constructor(compareFn) {
        this.compare = compareFn;
        this.root = null;
    }

    insert(value) {
        let current = this.root;
        if(current === null) {
            //Root must always be black - so are null leafs
            this.root = new RbNode(value, RbNode.BLACK);
            return;
        }

        while(true) {
            if(this.compare(value, current.value) < 0) {
                if (current.left === null) {
                    current.left = new RbNode(value, RbNode.RED)
                    this.fixInsert(current.left);
                    break;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = new RbNode(value, RbNode.BLACK)
                    this.fixInsert(current.right);
                    break;
                }
                current = current.right;
            }
        }
    }

    /* insert(value) { */
    /*     let current = this.root;  // Initialize current to the root of the tree */
    /*     let parent = null; */
    /*     while (current !== null) { */
    /*         parent = current; */
    /*         if (this.compare(value, current.value) < 0) { */
    /*           current = current.left; */
    /*         } else { */
    /*           current = current.right; */
    /*         } */
    /*     } */
    /*     let newNode = new RbNode(value, RbNode.RED, parent); */
    /*     if (parent === null) { */
    /*         this.root = newNode; */
    /*     } else if (this.compare(value, parent.value) < 0) { */
    /*         parent.left = newNode; */
    /*     } else { */
    /*         parent.right = newNode; */
    /*     } */
    /*     this.fixInsert(newNode); */
    /* } */


    /** 
    * Helper function to rotate the tree to the left (A is rotating node)
    * 
          A              B
         / \            / \
        X   B   =>    A   C
           / \        / \
          Y   C      X   Y
    * */
    rotateLeft(node) {
        let right = node.right;
        node.right = right.left;
        if(right.left !== null) {
            right.left.parent = node;
        }
        
        right.parent = node.parent;

        if(node.parent === null) {
            this.root = right;
        } else if (node === node.parent.left){
            node.parent.left = right;
        } else {
            node.parent.right = right;
        }
        right.left = node;
        node.parent = right;
    }
 
    /** 
    * Helper function to Rotate the Tree to the Right (A is rotating node)
    *
            A            B
           / \          / \
          B   X   =>   C   A
         / \              / \
        C   Y            Y   X
    *
    * */
    rotateRight(node) {
        let left = node.left;
        node.left = left.right;
        //update children
        if(left.right !== null) {
            left.right.parent = node;    
        }
        
        left.parent = node.parent;
        //update parent node
        if(node.parent === null) {
            this.root = left;
        } else if (node === node.parent.right) {
            node.parent.right = left;
        } else {
            node.parent.left = left;
        }
        left.right = node;
        node.parent = left;
    }

    fixInsert(node) {
      let current = node;
      while (current.parent !== null && current.parent.color === RbNode.RED) {
        let parent = current.parent;
        let grandparent = parent.parent;
        if (parent === grandparent.left) {
          let uncle = grandparent.right;
          if (uncle !== null && uncle.color === RbNode.RED) {
            parent.color = RbNode.BLACK;
            uncle.color = RbNode.BLACK;
            grandparent.color = RbNode.RED;
            current = grandparent;
            continue;
          }
          if (current === parent.right) {
            current = parent;
            this.rotateLeft(current);
          }
          parent.color = RbNode.BLACK;
          grandparent.color = RbNode.RED;
          this.rotateRight(grandparent);
        } else {
          let uncle = grandparent.left;
          if (uncle !== null && uncle.color === RbNode.RED) {
            parent.color = RbNode.BLACK;
            uncle.color = RbNode.BLACK;
            grandparent.color = RbNode.RED;
            current = grandparent;
            continue;
          }
          if (current === parent.left) {
            current = parent;
            this.rotateRight(current);
          }
          parent.color = RbNode.BLACK;
          grandparent.color = RbNode.RED;
          this.rotateLeft(grandparent);
        }
      }
      this.root.color = RbNode.BLACK;
    }
     

    remove(value) {
        let node = this.find(value);
        if(node !== null) {

        }
    }

    fixDelete(node) {

    }

    findMax() {
        let current = this.root;
        while(current !== null && current.right !== null) {
            current = current.right;
        }
        return current.value
    }

    findMin() {
        let current = this.root;
        while(current !== null && current.left !== null) {
            current = current.left;
        }
        return current.value;
    }
    
    find(value) {
        let current = this.root;
        while (current !== null) {
            if (this.compare(value, current.value) === 0) {
            return current;
            } else if (this.compare(value, current.value) < 0) {
            current = current.left;
            } else {
            current = current.right;
            }
        }
        return null;
    }

    exists(value) {
        return this.find(value) !== null;
    }
    

    minHigherVal(value) {
      let current = this.root;
      let minHigher = null;
      while (current !== null) {
        if (this.compare(value, current.value) < 0) {
          minHigher = current.value;
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return minHigher;
    }

}


