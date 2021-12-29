/**
 * General implementations of Binary Tree functions
 */

class Node {
    constructor(val = 0){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(val){
        this.head = new Node(val);
    }

    get(val) {
        let current = this.head;
        while(current){
            if(current.val === val){
                return current;
            } else if(val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    insert(val) {
        let current = this.head;
        while(true){
            if(current.val === val){
                return false;
            } else if(val < current.val) {
                if(current.left){
                    current = current.left;
                } else {
                    current.left = new Node(val);
                    return true;
                }
            } else if(val > current.val) {
                if(current.right){
                    current = current.right;
                } else {
                    current.right = new Node(val);
                    return true;
                }
            }
        }
    }

    inOrder(node, visited = []) {
        if(node) {
            this.inOrder(node.left, visited);
            visited.push(node.val);
            this.inOrder(node.right, visited);
        }
        console.log(visited);
        return visited;
    }

    preOrder(node, visited = []) {
        if(node) {
            visited.push(node.val);
            this.preOrder(node.left, visited);
            this.preOrder(node.right, visited);
        }
        console.log(visited);
        return visited;

    }

    postOrder(node, visited = []) {
        if(node) {
            this.postOrder(node.left, visited);
            this.postOrder(node.right, visited);
            visited.push(node.val);
        }
        console.log(visited);
        return visited;
    }

    bfs(node = this.head) {
        let result = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            let current = queue.shift();
            result.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        console.log(result);
        return result;
    }

    bfsRecursive() {

    }

    //A little harder
    remove(val) {

    }

}





/**
 * 
 * Tree Reconstruction Problems
 * 
 */

var arr = [1,2,3,4,5,6,7,8] 



/**
 * 
 * Practice Zone
 * 
 */





/**
 * 
 * Solutions
 * 
 */

// arr in order


// arr pre-order



//arr post order