use std::cell::RefCell;
use std::rc::Rc;

// Type Alias for node, Rc to ensure node isnt dropped while referenced, RefCell allows mutable internal next value
type NodeRef = Rc<RefCell<Node>>;
type NodeOption = Option<NodeRef>;

#[derive(PartialEq, Debug)]
pub struct Node {
    data: String,
    next: NodeOption
}

impl Node {
    pub fn new(text: String) -> NodeRef {
        Rc::new(RefCell::new(Node {
            data: text,
            next: None
        }))
    }
}

impl Drop for Node {
    fn drop(&mut self) {
        println!("Node with this data -> '{}' just dropped", self.data);
    }
}


pub struct LinkedList {
    head: NodeOption,
    tail: NodeOption,
    pub length: usize
}

impl LinkedList {

    pub fn new_empty() -> Self {
        LinkedList {
            head: None,
            tail: None,
            length: 0
        }
    }

    pub fn new(text: String) -> Self {
        let new_head = Node::new(text);

        LinkedList {
            head: Some(new_head),
            tail: None,
            length: 0
        }
    }

    pub fn prepend(&mut self, text: String) {
        let new_head = Node::new(text);

        match self.head.take() {
            Some(old_head) => {
                new_head.borrow_mut().next = Some(Rc::clone(&old_head));

                match &self.tail {
                    None => {
                        self.tail = Some(Rc::clone(&old_head));
                    },
                    _ => ()
                }
            },
            _ => ()
        }
        self.head = Some(new_head);
        self.length = self.length + 1;
    }

    pub fn print_items(&self) {
        for node in self.iter_node() {
            println!("the data is {}", node.borrow().data);
        }
    }

    fn iter_node(&self) -> ListNodeIterator {
        match &self.head {
            Some(head) => {
                ListNodeIterator::new(Some(Rc::clone(head)))
            },
            _ => ListNodeIterator::new(None)
        }
    }

    pub fn pop_head(&mut self) -> Option<String> {
        self.head.take().map(|old_head| {
            match old_head.borrow_mut().next.take() {
                Some(new_head) => {
                    self.head = Some(Rc::clone(&new_head));
                },
                _ => {}
            }
            self.length = self.length - 1;
            old_head.borrow().data.clone()
        })
    }
  
    pub fn pop_end(&mut self) -> Option<String> {
        self.tail.take().map(|old_tail| {
  
            let mut iterator = self.iter_node();
            let mut temp = iterator.next();
  
  
            for _ in 0..self.length - 2 {
                temp = iterator.next();
            }
  
            match temp {
                Some(node) => {
                    node.borrow_mut().next = None;
  
                    if self.length > 2 {
                        self.tail = Some(Rc::clone(&node));
                    }
                },
                _ => {}
            }
  
            self.length = self.length - 1;
            old_tail.borrow().data.clone()
        })
    }

}

pub struct ListNodeIterator {
    current: NodeOption
}

impl ListNodeIterator {
    pub fn new(start_at: NodeOption) -> Self {
        ListNodeIterator {
            current: start_at
        }
    }
}

impl Iterator for ListNodeIterator {
    type Item = NodeRef;
    
    fn next(&mut self) -> NodeOption {
        let current = &self.current;
        let mut result = None;

        self.current = match current {
            Some(ref current) => {
                result = Some(Rc::clone(current));
                match &current.borrow().next {
                    Some(next_node) => {
                        Some(Rc::clone(next_node))
                    },
                    _ => None
                }
            },
            _ => None
        };
        result
    }
}