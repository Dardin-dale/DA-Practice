
//remove duplicates from SLL 
function removeDups(head){
    let check = {};
    let prev = null;
    for(var i = 0; i < list.length; i++){
        if(check.hasOwnProperty(curr.val)){
            prev.next = head.next
        } else {
            check[curr.val] = true;
        }
    }
}

// returns kth to tlast element of the Linked List
// Trivial solution: length is known
function returnKthToLast(k, list) {
    if(k < 0 || k >= list.length) return undefined;
    if( k === list.length -1) return list.head;
    if( k === 0) return list.tail;
    let target = list.length - k;
    let curr = list.head;
    for(var i = 0; i < target; i++){
        curr = curr.next;
    }
    return curr;
}

// add one to each recursive call after reaching the end.
function recursiveKthToLast(head, k) {
    if(!head) return 0;
    let index = recursiveKthToLast(head.next, k) + 1
    if (index === k){
        return head;
    }
    return index;
}


// delete a middle node from a linked list
function deleteNode(node) {
    if (n == null || n.next == null) return false; // Failure 4 }
    let nextNode = node.next;
    node.data = nextNode.data;
    node.next = nextNode.next;
}

//sort list of numbers so that values are on the correct side of the pivot chosen.
//no order is needed to pass
function partition(list, pivot){
    let head = list;
    let tail = list;
    while(list){
        let next = list.next;
        if(list.data > pivot){
            tail.next = list;
            tail = list;
        } else {
            list.next = head;
            head = list;
        }
        list = next;
    }
}

//Sums two lists that represent numbers with digits reversed.
//returns summed value as list.
function sumLists(list1, list2, carry = 0){
    if(list1 === null && list2 === null && carry === 0) return null;
    let result = new Node();
    let newCarry = 0;
    result.data = carry
    if (list1) {
        result.data += list1.data;
    }
    if (list2) {
        result.data += list2.data;
    }
    if(result.data >= 10){
        result.data = result.data % 10;
        newCarry = 1;
    }
    result.next = sumLists(list1 ? list1.next : null, list2 ? list2.next: null, newCarry);

    return result;

}

// assume lists are in sorted order
function sumLists2(list1, list2, carry=0){
    let temp1 = list1;
    let temp2 = list2;
    function padList(list, num){
        let head;
        for(var i = 0; i < num; i++){
            let node = new Node(0);
            node.next = list;
            head = node;
        }
        return head ? head : list; 
    }

    let difference = Math.abs(list1.length - list2.length);

    if(list1.length > list2.length) {
        temp2 = padList(list2, difference);
    } else if (list2.length > list1.length){
        temp1 = padList(list2, difference);
    }

    function addLists(list1, list2) {
        if(!list1 && !list2){
            return [0, null];
        }
        let sum = addLists(list1.next, list2.next);
        let val = sum[0] + list1.data + list2.data;
        let node = new Node(val % 10);
        node.next = sum[1];
        let carry = 0;
        if (val > 10){
           carry = 1;
        }
        return [carry, node];
    }

    let result = addLists(temp1, temp2);
    if (result[0]){
        let node = new Node(1);
        node.next = result[1];
        return node;
    } else {
        return result[1];
    }

}


// Determine if list is a palindrome
function isPalindrome(list){
    let reverseList = null;
    let current = list.head;
    for(var i = 0; i < list.length; i++){
        let node = new Node(current.next.data);
        node.next = reverseList;
        reverseList = node;
        current = current.next;
    }
    current = list;
    for(var i = 0; i < list.length/2; i++){
        if(current.data !== reverseList.data){
            return false;
        }
        current = current.next;
        reverseList = reverseList.next;
    }

    return true;

}

//iterative hint: stack
function isPalindronme2(list) {
    let stack = [];
    let current = list.head;
    for (var i = 0; i < list.length/2; i++){
        stack.push(current);
        current = current.next;
    }
    if(list.length % 2 !== 0){
        current = current.next;
    }
    for (var i = 0; i < list.length/2; i++){
        let node = stack.pop();
        if (node.data !== current) return false;
        current = current.next;
    }

    return true;

}

//recursive Solution
function isPalindrome3(list) {
    return isPalindrome3actual(list.head, list.length);
}

function isPalindrome3actual(node, length){
    //center cases
    if (!node || length === 0){
        return [node, true];
    } else if(length === 1){
        return [node.next, true];
    }

    let res = isPalindrome3actual(node.next, length-2);
    //check if false
    if(!res[1] || res[0] === null){
        return res;
    }

    res[1] = (res[0].data === node.data)
    
    return([node.next, res[1]])
    
}


//Find by reference if two lists share a common node
function intersect(list1, list2) {
    let visited = {};
    let current = list1;
    while(current){
        visited[current] = true;
    }
    current = list2;
    while(current){
        if(visited[current]){
            return current;
        }
    }
    return false;
}

//Find intersections the hard way by finding tails first
function tailAndLength(list){
    if(!list) return [null, 0];
    let current = list;
    let size = 1;
    while(current.next){
        size++;
        current = current.next
    }
    return [current, size];
}

function intersectHarder(list1, list2){
    let tails1 = tailAndLength(list1);
    let tails2 = tailAndLength(list2);
    if(tails1[0] !== tails2[0]) return false;

    //compare lengths and chop longer one.

    //iterate both until nodes collide and return
}
