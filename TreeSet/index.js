
import RbTree from '../RedBlackTree';


class TreeSet {
    constructor() {
        this.tree = new RbTree();
    }

    add(value){
        if(!tree.exists(value)) {
            tree.insert(value);
        }
    }

    remove(value) {
        tree.delete(value);
    }    

    //returns minimum higher value in tree
    higher(value) {
        
    }
}
