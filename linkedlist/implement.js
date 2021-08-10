// Linked List implementation for JavaScript

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head;
        this.tail = (head) ? head: null;
        this.length = (head) ? 1: 0;
    }

    size() {
        let length = 0;
        let node = this.head
        while(node) {
            count++;
            node = node.next
        }
        return length;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLast() {
        let node = this.head;
        if (node) {
            while(node.next){
                node = node.next
            }
        }
        return node;
    }

    getFirst() {
        return this.head;
    }

    add_end(data) {
        let newNode = new ListNode(data);
        let end = getLast();
        end.next = newNode;
        this.length = this.length + 1;
    }

    add_start(data){
        let newHead = new ListNode(data);
        newHead.next = this.head;
        this.head = newHead;
        this.length = this.length + 1;
    }
}