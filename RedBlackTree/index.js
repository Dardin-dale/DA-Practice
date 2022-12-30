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

    constructor(value, color) {
        this.value = value;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RbTree {
    contructor(compareFn) {
        this.compare = compareFn;
        this.root = null;
    }

    insert(value) {
        if(this.root === null) {
            //Root must always be black - so are null leafs
            this.root = new RbNode(value, RbNode.BLACK);
            return;
        }

        let current = this.root;
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

    /** 
    * Helper function to rotate the tree to the left
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
        } else if (note === node.parent.left){
            node.parent.left = right;
        } else {
            node.parent.right = right;
        }
        right.left = node;
        node.parent = right;
    }

    /** 
    * Helper function to Rotate the Tree to the Right
    *
            A            B
           / \          / \
          B   X   =>   C   A
         / \              / \
        C   Y            Y   X
    *
    * */
    rotateRight(node) {

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
     

    delete(value) {

    }

    fixDelete(node) {

    }
    
    

}


