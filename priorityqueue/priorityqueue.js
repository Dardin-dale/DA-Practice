/**
 * Priority Queue class, Implemented as a heap
 * 
 */

class PriorityNode {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueueFlex {
    constructor(){
        this.queue = [];
    }

    _bubbleUp() {
        let idx = this.queue.length - 1;
        const target = this.queue[idx];
        while(idx > 0){
            let pIdx = Math.floor((idx - 1)/2);
            let parent = this.queue[pIdx];
            if(target.priority >= parent.priority) break;
            this.queue[pIdx] = target;
            this.queue[idx] = parent;
            idx = pIdx;
        }
    }

    enqueue(val, priority) {
        let newNode = new PriorityNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    _sinkDown() {
        let idx = 0;
        let target = this.queue[0];
        let swap = null;
        while(true){
            let leftIdx = (idx*2 + 1);
            let rightIdx = (idx*2 + 2);
            let left = this.queue[leftIdx];
            let right = this.queue[rightIdx];
            if(target.priority >= left.priority){
                swap = leftIdx;
            }
            if((swap !== null && left.priority >= right.priority) ||
               (swap === null && target.priority >= right.priority)){
                   swap = rightIdx;
            }
            if(swap === null) break;
            this.queue[idx] = this.queue[swap];
            this.queue[swap] = target;
            idx = swap;
        }
    }

    dequeue() {
        const head = this.queue[0];
        const end = this.queue.pop();
        if(this.queue.length > 0) {
            this.queue[0] = end;
            this._sinkDown();
        }
        return head;
    }
}


/**
 * 
 * Priority Queue Lazy version kept as a simple list without bubble up/down.
 * 
 */

class PriorityQueueLazy {
    constructor(){
        this.queue = [];
    }

    _selfSort() {
        this.queue.sort((a,b) => a.priority - b.priority);
    }

    enqueue(val, priority) {
        this.queue.push({val, priority});
        this._selfSort()
    }

    dequeue() {
        return this.queue.shift();
    }
}


/**
 * 
 * Heap for minimum values
 */

class MinHeap {
    constructor(){
        this.heap = [];
    }

    _size() {
        return this.heap.length;
    }

    //move new value into position
    _bubbleUp() {
        let idx = this._size() - 1;
        const target = this.heap[idx];
        while(idx > 0){
            //find parent
            let pIdx = Math.floor((idx-1)/2);
            let parent = this.values[pIdx];
            if(target >= parent) break; // element is in the correct position
            //swap parent in the heap with target value
            this.heap[pIdx] = target;
            this.heap[idx] = parent;
            idx = pIdx;
        }
    }

    enqueue(val) {
        this.heap.push(val);
        this._bubbleUp()
    }

    //find new current minimum after removing the head
    _sinkDown() {
        let idx = 0;
        let length = this._size();
        const target = this.heap[idx];
        while(true){
            let leftIdx = 2*idx+1;
            let rightIdx = 2*idx+2;
            let left,right;
            let swap = null;
            //Check left Child
            if(left < length){
                left = this.heap[leftIdx];
                if(left < target){
                    swap = leftIdx;
                }
            }
            //Check right child
            if((swap === null && right < target) ||
               (swap !== null && right < left)
               ) {
                swap = rightIdx;
            }
            if(swap === null) break; //done!
            //swap with child
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = target;
            idx = swap;
        }


    }

    dequeue() {
        //swap head and tail and save min
        let head = this.heap[0];
        let end = this.heap.pop();
        if(this.heap._size() > 0){
            this.heap[0] = end;
            this._sinkDown();
        }
        return head;
    }
}


/**
 * 
 * Heap for max values
 */

class MaxHeap {
    constructor(){
        this.heap = [];
    }

    
    _bubbleUp() {

    }

    enqueue(val) {

    }

    _sinkDown() {

    }

    dequeue() {

    }
}