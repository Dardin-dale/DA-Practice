/*

Three stacks with one array:

    implement 1 : use fixed division of the array passing in a max length
    in the Multistack constructor.

    implement 2: circular array, add capacity and shift values when one stack exceeds it's size
    note - really hard


*/


/* 
    
Keep track of the minimum value of a stack with O(1) get time complexity.

    Initial thought: minimum is easy to calculate while adding to the stack
    the hard part comes when trying to remove from the stack to update the min.

    implement 1: add a node wrapper that keeps track of the minimum value for all
    of the values below it on the stack, peek and update this node field when adding.
    peek the top element when just getting the current minimum.

    implement 2: have an additional stack that keeps track of the minimum values.
    if the pointer for the current min is removed, remove it from the "min stack".

*/

class StackofPlates {
    constructor(capacity) {
        this.capacity = capacity;
        this.stacks = [];
        this.current = 0;
    }

    push(val){
        if (this.stacks[this.current] > capacity){
            this.current += 1;
            this.stacks.push([]);
            this.stacks[this.current].push(val);
        } else {
            this.stacks[this.current].push(val);
        }
    }

    pop(){
        let stack = this.stacks[this.current];
        if(stack.length){
            let v = stack.pop();
            if (stack.length && this.current > 0){
                this.stacks.pop();
                this.current--;
            }
            return v;
        } else {
            return undefined; 
        }
    }

    //need to determine behavior / if 
    popAt(idx) {
         
    }

}

class QueueofStack {
    constructor(){
        /**
         * Make a queue using two stacks,
         * 
         * add to stack and then move to other stack to get FIFO order
         * shift back to FIFO whenever pushing to the queue.
         * swap if needed for the current operation.
         */
    }
}



/**
 * Sort stack using only one additional stack.
 * 
 */
    function sort(stack) {
        let help = []; // new stack will be sorted in reverse order
        while(stack.length > 0){
            let temp = stack.pop();
            while(help.length > 0 && temp <= help.peek()) {
                //move ovrer values until temp is in the right spot.
                stack.push(help.pop())
            }
            //add temp to sorted stack
            help.push(temp);
        }

        //flips help stack back to original stack
        while(help.length > 0) {
            stack.push(help.pop());
        }

    }



/**
 * Merge stack but with stacks
 */

function stackMergeSort(stack) {

}


/**
 * Quick sort for stacks
 */

function stackQuickSort(stack) {

}


