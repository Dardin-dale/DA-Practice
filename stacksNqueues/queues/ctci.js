

/**
 * 
 * Animal shelter 
 * 
 * FIFO adoptions but can choose between a dog and a cat Animal
 */

 class AnimalShelter {
    constructor(){
        this.queue = new LinkedList();
    }

    enqueue(animal) {
        this.queue.push(animal);
    }

    dequeueAny() {
        let head = this.queue.head;
        this.queue.head = head.next;
        head.next = null;
        return head;
    }

    dequeueDog() {
        let current = this.queue.head;
        let idx = 0;
        while(current){
            if(current.type === "Dog") break;
            current = current.next;
            idx++;
        }
        if(current){
            this.queue.remove(idx);
            current.next = null;
        }
        
        return current;
    }

}