
//Minimal Tree - given a sorted array make a binary Tree of minimal height
function minTree(arr) {
    if(!arr.length) return null
    if(arr.length == 1) return new Node(arr[0]);
    let middle = new Node(arr[arr.length/2]);
    middle.left = minTree(arr.slice(0, arr.length/2));
    middle.right = minTree(arr.slice(arr.length/2 + 1));
    return middle;
}


//List of Depths - given a Binary Tree return Linked lists of each node at each depth
//hint - traverse any way but keep track of level
function listDepths(head) {
    let lists = {0: new LinkedList(head)};
    let current = lists[0];
    let depth = 0;
    while(current){
        //no more nodes to add;
        if(!current.left) break;
        //add left and right nodes to the next list depth
        if(!lists.hasOwnProperty(depth + 1)){
            lists[depth + 1] = new LinkedList(current.left);
        } else {
            lists[depth + 1].push(current.left);
        }
        lists[depth+1].push(current.right);

        //move to next node in list or go down a depth
        if(current.next){
            current = current.next;
        } else {
            current = lists[depth + 1];
            depth++;
        }
    }
    return lists;
}

//Inefficient -- too many recursive calls

//helper for isBalanced - gets height of binary tree
function getHeight(root) {
    if(!root) return -1;
    let left = getHeight(root.left);
    let right = (root.right);
    return Math.max(left, right) + 1;
}

//see if tree is balances on either side (no more than 1 different)
function isBalanced(root) {
    if (!root) return true;
    let left = getHeight(left);
    let right = getHeight(right);
    if(Math.abs(left - right) <= 1){
        return isBalanced(root.left) && isBalanced(root.right)
    }
    return false;
}

//Better version

//stop re-checking sub branches
function checkHeight(root){
    if (root == null) return -1;

    let left = checkHeight(root.left);
    if (left == -Infinity) return -Infinity;

    let right = checkHeight(root.right);
    if (right == -Infinity) return -Infinity;

    let diff = Math.abs(left - right);
    if (diff > 1) {
        return -Infinity;
    } else {
        return Math.max(left, right) + 1;
    }
    
}

function isBalanced2(root){
    return checkHeight(root) != -Infinity;
}


//validate that a binary tree is a binary search tree
//uses in order traversal
function isBST(root, previous = null) {
    if (root == null) return;

    if (!isBST(root.left)) return false;

    if(previous != null && root <= previous) return false;

    if (!isBST(root.right)) return false;

    return true;
}

// pass min and max along

function isBST2(root, min = null, max = null){
    if (root == null) return;

    if ((!min && root.data > min) || (!max && root.data <= max) ) {
        return false;
    }
    
    if (isBST2(root.right, root.data) || !isBST2(root.left, null, root.data)){
        return false;
    }

    return true;
}


// Write an algorithm to find the "next" node of a BST assume given node has a link to it's parent

//hints : think about how in-order traversal works
// succesor is the leftmost node of the right subtree, what if no right subtree?
function nextBSTNode(node) {
    if (node == null) return null;
    let curr = node;
    if (curr.right) {
        curr = curr.right;
        while (curr.left) {
            curr = curr.left
        } 
    } else {
        let parent = node.parent;
        while(parent && parent.left != curr){
            curr = parent;
            parent = parent.parent;
        }
    }
    return curr;
}
 

/**
 * First common Ancestor of two given nodes in a binary tree - not a BST
 * 
 */
function commonAncestor(root, node1, node2) {
    if (!root || !node1 || !node2) return null;
    if (node1 === node2) return null;

    //Build path to each node
    let n1Path = _dfsFinder(root, node1);
    let n2Path = _dfsFinder(root, node2);

    //check if nodes are contained within the tree
    if(n1Path.length == 0 || n2Path.length == 0) return null;

    //iterate through the arrays to find the lca
    let idx = 0;
    while(idx <= n1Path.length && idx <= n2Path.length) {
        if (n2Path[idx] !== n1Path[idx]) {
            return n1Path[idx-1];
        } else if (n2Path[idx] === node1 || n1Path[idx] === node2) {
            return idx;
        }
        idx++;
    }

    return null;
}

//Builds array of DFS to find the Target Node - helper for common Ancestor
function _dfsFinder(root, target, visited = []) {
    if (root === target) return visited;
    if (!root) return [];

    visited.push(root);
    //recurse left
    let left = _dfsFinder(root.left, target, visited);
    //recurse right
    let right = _dfsFinder(root.right, target, visited);

    //see if either 
    if (left.length) {
        return left;
    } else {
        return right;
    }
}



/**
 * check if tree t2 is a subtree of a larger subtree t1
 */

function isSubtree(t1, t2) {
    if (t2.size > t1.size) return false;
    //look through tree until node is equal to the root of t2
    if (t1 == t2) {
        //root found determine if trees are equal
        return isEqual(t1, t2);
    }
    //traverse until root of subtree is found
    let left = isSubtree(t1.left, t2);
    let right = isSubtree(t1.right, t2);

    return left || right;
}

//helper function to test if trees are equal
function isEqual(node1, node2) {
    if (node1 !== node2) return false;

    //recurse left
    let left = isEqual(node1.left, node2.left);
    //recurse right
    let right = isEqual(node1.right, node2.right);

    return left && right;
}


/**
 * recurse to find all possible list combinations
 * @param {LinkedList} left - 
 * @param {LinkedList} right -
 * @param {Array<LinkedList>} list - result of weaves adjusted via recursed calls
 * @param {*} prefix - LinkedList with adjustable 
 */
function weave(left, right, list, prefix) {
    //empty list return results
    if(left.length == 0 || right.length == 0) {
        let result = prefix.clone();
        result.add(left);
        result.add(right);
        list.add(result);
        return;
    }

    //recurse left
    let leftHead = left.shift();
    prefix.add(leftHead);
    weave(left, right, list, prefix)
    prefix.pop();
    left.unshift(leftHead);

    //recurse right
    let rightHead = right.shift();
    prefix.add(rightHead);
    weave(left, right, list, prefix);
    prefix.pop();
    right.unshift(rightHead)
}

/**
 * given a tree print all the possible arrays that could have caused a Binary Search Tree when read left to right
 * 
*/
function BSTSequence (head) {
    if(!head) return console.log([]);
    let list = []; // list of all arrays
    //start prefix
    let prefix = new LinkedList(head.data);
    // recurse left and right
    let left = BSTSequence(head.left);
    let right = BSTSequence(head.right);
    //weave results together to form results
    for (let i in left) {
        for (let j in right) {
            let weaved = [new LinkedList()];
            weave(i, j, weaved, prefix)
            list.push(weaved)
        }
    }


    return list;
}
