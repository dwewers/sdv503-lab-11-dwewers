# sdv503-lab-11-dwewers

Introduction to Javascript Data Structure

There are several different types of Javascript data structures. These include structures such as Stack, Queue, linked list, Hash tables and trees.

The first type that I will discuss is stack. Stack uses a method that is known as Last in - First out (LIFO). This is where the last item/method that you pushed too the stack becomes the first part that is removed.

  Push                   Pop
 [  A  ] -> [-TOP--] -> [  A  ]
            [      ]
            [      ]
            [      ]
            [      ]
            [      ]
            [Bottom]
As you can see, the last item that is added to the stack is the firs one out
An example of a stack format code is seen below:

class Stack{
    constructor(){
    this.stack = {} //This line of code creates a new empty object called stack
    }
    push(value){ //THis line pushes the assigned parameter to the top of the created stack
    }
    pop(){//This line removes the last value and returns it
    }
    peek(){//This checks the last added value to the stack
    }
}
When would we use stack?
During function calls
Evaluating an expression
Converting an Infix to a Postfix
Depth first search (DFS)
Scheduling Algorithms

//-----------------------------------------

Queue is similar to that of stack. The only key difference is that it follows a method known as first-in, first-out (FIFO). This means that the first item that is pushed is the first one that will be removed. Another noticeable difference to stack is that we use an array rather than an object.

We can look at a queue data structure like this:

[a]  -->  [a , b , c , d]  -->  [a]

"a" is pushed to the array first, and then is popped and returned.
The general format for a queue stack looks like this:

class Queue {
  constructor() {
    this.queue = [];//This is an array that we created called "queue" that we use to store the called values.
    this.length = 0;//This is the length of the array. We can also use this if we want to see a change in the array. This is the default length, but if we were to push something to the array, it would return as a different value.
  }
  enqueue(value) {//This adds the designated value to the end of the "queue"
  }
  dequeue() { //This removes the last or "oldest" value from the array
  }
  peek() {//This checks the last added value to the queue
  }
}
           +---+---+---+
enqueue -> | 3 | 2 | 1 | -> dequeue
           +---+---+---+
As we can see, we will push something to the array, pushing 3 to the array above would remove 0 from the other end.

Applications of Queue
We use queue whenever we want to organise a group of items in order from first in to last, where the first one that comes in is the first one out. You can imagine this like people lining up. The person that is first in the line was the first person to line up. This means that they will be the first to leave the line. Another place this idea can be used is in printing files at a printer. if a bunch of people were to send their files at various times, the queue would be in sequence of who was fastest, second fastest, and so on


//-----------------------------------------

Linked Lists are quite different from the previous examples. In this structure type, items are organised sequentially. In these sequences, the items all point to the next item in the link. Within this structure, each node contains data and the next value.
A way of looking at this looks like this.

Head  -->  [10| ]  -->  [20| ]  -->  [30| ]  -->  [40| ]  -->  Null

Here is an example of what it would look like in code:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size 0;
  }
}
insert(data) {
  let node = new Node(data);
  let current;
  if (!this.head) {
    this.head = node;
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
}
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }


PSEUDO code:
Create a class that represents each of the nodes in the list "class Node{"
constructor(argument one, argument two)
identify data as an argument 
identify next as a argument
end
Create a class that represents each of the nodes in the list "class LinkedList{"
constructor()
identify head as null or unknown
identify size as 0
end
Insert data to the end of our list
create a node object using the data passed in
If no head is head available, we will generate a new one
end
if there is now a head, or there already was one, add a node to our list
end
loop this code until there is a node with no next, aka the end of our list.
end 
set the next value to be the current node
end
increment the size
end
if the index of this is 0, point the head of the current node to the next item in the list. This will be the second item at index 1.
end
else loop over the list
increment the count
set previous to the current node
set current node to the next node
end
update the next pointer of our previous node to be the next node
end
decrement the size by 1


Applications of Linked lists:
Dynamic Memory Allocation
Maintaining Directory names
Performing arithmetic operations on long integers

Examples of use could include things such as a previous and next page in a web browser.

//-----------------------------------------

Hash Tables is similar to the linked list in the sense that it maps keys to values. This method can look like this:



Keys    Hash Func      Buckets
        |      |       
[X]     |\    /|  [1] [1357-9753]
        | \  / |       
[Y]     |--\/--|  [2] [2468-8642]
        |  /\  |       
[Z]     | /  \ |  [3] [1234-5678]
        |      |       
The hashing function is the key part in this process. The main purpose of a hash function is to return the same output for the given input

Here is an example of a format for a hash table code:

class HashTable {
  constructor(size) {
    function
    this.size = size;//we define the size of our hash table
    this.storage = [];//Creates an empty array called storage
  }
  insert(key, value) { }
  get() {}
  remove() {}
 
  myHashingFunction(str, n) {//This is the function that we will use to hash our keys
    let sum = 0; //Sets the default value of sum as 0
    for (let i = 0; i < str.length; i++) { //Increments i by one for the length of the string
      sum += str.charCodeAt(i) * 3;
    }
    return sum % n;
  }
}
Applications of hash tables include:
Message Digest
Password Verification
Compiler Operation
Linking a file name and path together


The final structure that I am going to discuss is trees or Binary search trees. When talking about trees, there are two main parts, the parent and the child. The parent is where the children branch off from, but can also be a child to a previous node. A child is what is branched off from a parent node. A child does not necessarily have to have a node branched off from it, whereas a parent needs to be classed as a parent. There is a third party which is the start of the tree; this is known as the root. A root does not have a parent.

This is represented like this:

                  (Root)                  
                ()      ()
              /   \       \
             V     V       V
            ()      ()      ()
          /        /       /   \
         V       V       V       V
        ()      ()      ()       ()
      /        /  \       \       \
     V       V      V       V       V
    ()      ()      ()      ()      ()





References
Bazalev, N., Dave, Ryan, P., Milos, & Evgeniia. (2020, February 20). Know your JavaScript data structures. Retrieved from https://blog.logrocket.com/know-your-javascript-data-structures/

Aberneithie, S. (2016, August 8). What are the real life applications of stack data structure? - Quora. Retrieved from https://www.quora.com/What-are-the-real-life-applications-of-stack-data-structure

Kushagra7744. (2018, November 30). Applications of Hashing. Retrieved from https://www.geeksforgeeks.org/applications-of-hashing/

Jain, S. (2018, November 6). What are the applications of queues? - Quora. Retrieved from https://www.quora.com/What-are-the-applications-of-queues

Mittal, D. (2018, August 31). Applications of linked list data structure. Retrieved from https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

Yarovoi, E. (2016, March 12). What are some practical applications of binary search trees? - Quora. Retrieved from https://www.quora.com/What-are-some-practical-applications-of-binary-search-trees

