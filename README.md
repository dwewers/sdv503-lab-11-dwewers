# sdv503-lab-11-dwewers

Introduction to Javascript Data Structure

We use data structures when we want  to store and organise data. When we do this, we can make this stored data easier to access, navigate and modify.
Depending on what structure we use, we can sort and store the data in a vairety of different ways. We use data structures in a variety of ways, and is used all
throughout computer systems. Advantages of using data structures includes ease in managing and utilizing large datasets, navigate and find specific data
withing a database easier, and to simplify and speed up overall data processing.

The use of data structures is very important in real world practise if we want an effective and efficient workflow. Use of data structures can assisnt in 
management and problem solving withing systems. The better we can organise, the easier and more efficient it is to find and modify data. Within Javascript, there
are two data structures. These structures being primitive and non-primitive. The main difference between the two is that the primitive data structure and data types
are native to javascript. This means that they include such things as boolean, null, number, string, etc. Whereas a non-primitive data structure or data type is the 
opposite. The types are definced by the programmer, rather than the javascript language. This means that they include things such as linear data structures, static 
data structures, and dynamic data structures.

There are several different types of Javascript data structures. These include structures such as Stack, Queue, linked list, Hash tables and trees.
_____________________________________________________________________
/////////////////////  Javascript Recursion  ////////////////////////
We use a recursive function when we want a function call itself until we dont want it too. This could be finite, or infinitely. Generally when we write a recursive function, we
will include a condition so that we can stop the recursion. If we were to miss out this condition, the function will loop indefinitely. A general way that we can write it so that
it doesnt repeat indefinitely. looks like this:

function recurse() {
    if(condition) {
    } else {
        recurse();
    }
}
We use these functions when we want to break down a larger issue into smaller ones. We will generally find recurse functions in binary structures such as Binary search trees or
graphs, or in algorithms such as binary search and quicksort. We can use recurse functions for a variety of tasks such as decreasing a value from a specified number. If we want to count down
from a specifc number, we can write it like this (executable code in recursive.js):

function recursiveFunc(myNumber) {
    
let nextVal = myNumber - 1; 

    if (nextVal > 0) { 
        recursiveFunc(nextVal);
    }
    console.log(myNumber);
}
recursiveFunc(10); 


PSEUDO code:
Create recursive function with paramater
create a new variable, and let it equal the parameter minus 1
if the statement "new variable is greater than 0" is true, repeat
end
console log parameter
end
call function with set value of parameter

Advantages and disadvantages of recursion
 There are a few advantages and disadvantages of recursion. These include:

 Advantages
 It makes the algorithm easier for problems like tree traversal
 Makes things easier to visualize 
 It is the unique way of implementing a variable number of nested loops
 Can reduce time to write and debug code

 Disadvantages
 Recursion is generally slower
 Takes up more of the stack
 Will generally use more memory
 Every recursive call causes the stack to increase
 Large stack can cause crashes (crash the program)
 Can often throw the StackOverflowException error when trying to process large sets

 //Real world uses
 We can use recursion with directory structure within a file system. We can use this method to find files, create directories, delete files and so on

 Collision detecion in game development (Binary Space Partitioning(BSP) trees)

 Functional programming Languages

 XML, or anything that involves traversin a tree

 Building a CMS for a website. Travesing from sub-pages back to the root (which could be the home page)

 Looking up words in a dictionary

 Business bosses giving commands and passing them down through the ranks
 
 Russian Dolls

_____________________________________________________________________
//////////////////////////  Linked List  ////////////////////////////

Linked Lists are quite different from the previous examples. In this structure type, items are organised sequentially. In these sequences, the items all point to the
 next item in the link. Within this structure, each node contains data and the next value. Linked list does not use a physical placement of data within its memory. As stated
 before, we use a referencing system to organise the data. This means that we arent identifying the position or the index of each node within the list. Using this method allows
 us to add and remove items from the list without having too rearrange the contents within the structure. The data stored within the list is in a linear fashion. Within each
 of the nodes there is also a link to the next node in the list. There are two types of lists that we can have, singly and doubly linked lists. A single linked list only contains
 one pointer to another node, whereas a doubly linked list contains two pointers (generally previous and next).

 There are a few advantages and disadvantages of the linked list data structure. These include:

Advantages:
Efficient insertion and removal of new elements
Less complex than restructuring an array

Disadvantages:
Uses more memory than arrays
Inefficient to retrieve a specific element
Inefficient to traverse the list backward


A way of looking at this looks like this.

Head  -->  [10| ]  -->  [20| ]  -->  [30| ]  -->  [40| ]  -->  Null

Here is an example of what it would look like in code (executable code in linked.js):

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
Other examples include music players with their previous and last song, and adding new songs to the queue

______________________________________________________________
/////////////////////////  Stack  ////////////////////////////

The first type that I will discuss is stack. Stack uses a method that is known as Last in - First out (LIFO). This is where the last item/method that you pushed too 
the stack becomes the first part that is removed.

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

    Example Full

    class Stack { //This is where we create the class Stack
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) { //Thiis is where we add an element to the top of the class
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() { //This is where we return the length of the stack
      return this.top;
   }
   peek() {//This checks the top element of the stack
      return this.data[this.top-1];
   }
   isEmpty() {//This checks to see if there is any data in the 
     return this.top === 0;
   }
   pop() {//This removes and returns the element at the top of the stack
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
   print() {//This is where we console log the elements of the stack
      var top = this.top - 1; // because top points to index where new    element to be inserted
      while(top >= 0) { // print upto 0th index
          console.log(this.data[top]);
           top--;
       }
    }
    reverse() {//We can use recursion to reverse the order of the stack
       this._reverse(this.top - 1 );
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1);
       }
       console.log(this.data[index]);
    }
}

    PSEUDO Code
    Create a stack class
    end
    Insert an Element to the Top of Stack
    end
    Return the Length of the Stack
    end
    Get the Top Element of the Stack
    end
    Check If the Stack Is Empty
    end
    Delete Element at the Top of the Stack
    end
    Print the Elements of the Stack
    end

    
}
When would we use stack?
During function calls
Evaluating an expression
Converting an Infix to a Postfix
Depth first search (DFS)
Scheduling Algorithms

_______________________________________________________________
//////////////////////////  Queue  ////////////////////////////


Queue is similar to that of stack. The only key difference is that it follows a method known as first-in, first-out (FIFO). This means that the first item that is 
pushed is the first one that will be removed. Another noticeable difference to stack is that we use an array rather than an object.

We can look at a queue data structure like this:

[a]  -->  [a , b , c , d]  -->  [a]

"a" is pushed to the array first, and then is popped and returned.
The general format for a queue stack looks like this:

class Queue {
  constructor() {
    this.queue = [];//This is an array that we created called "queue" that we use to store the called values.
    this.length = 0;//This is the length of the array. We can also use this if we want to see a change in the array. This is the default length, but if we were to 
    push something to the array, it would return as a different value.
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

Example of Queue:

class Queue //This is where we create a new class Queue
{ 
    constructor() 
    { 
        this.items = []; //We use an array to implement a queue
    } 
enqueue(element) //Adds an element to the queue
{     
    // adding element to the queue 
    this.items.push(element); 
} 
dequeue() //Removes an element from the queue
{ 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
} 
front() //returns the front element of the queue
{ 
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
}
isEmpty() //Returns true if the queue is empty
{ 
    return this.items.length == 0; 
} 
printQueue() //Returns all the elements of an queue
{ 
    var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
        str += this.items[i] +" "; 
    return str; 
} 

var queue = new Queue(); //Creates an object for the queue class

console.log(queue.dequeue()); //Test dequeue and pop on an empty queue 

//This line returns true since we havent added anything to the queue yet
console.log(queue.isEmpty()); 

//The six lines below adds values to the queue
//The queue will look like [111, 222, 333, 444, 555, 666]
queue.enqueue(111); 
queue.enqueue(222); 
queue.enqueue(333); 
queue.enqueue(444); 
queue.enqueue(555); 
queue.enqueue(666); 

console.log(queue.front());   //This returns the value at the fron. In this case its 111
console.log(queue.dequeue()); //This removes the first value from the queue. The cue will now be 
                              //[222, 333, 444, 555, 666]
console.log(queue.front());   //This returns the value at the fron. In this case it is now 222
console.log(queue.dequeue()); /This removes the first value from the queue. The cue will now be 
                              //[333, 444, 555, 666]
console.log(queue.printQueue());// Returns the queue which now looks like : [333, 444, 555, 666]

Pseudo Code:
create a new class Queue
end
use an array to implement a queue
end
Removes an element from the queue
end
returns the front element of the queue
end
Returns true if the queue is empty
end
Returns all the elements of an queue
end
Create an object for the queue class

Test dequeue and pop on an empty queue

add values to the queue

console log desired outcomes


Applications of Queue
We use queue whenever we want to organise a group of items in order from first in to last, where the first one that comes in is the first one out. You can imagine
 this like people lining up. The person that is first in the line was the first person to line up. This means that they will be the first to leave the line. Another
  place this idea can be used is in printing files at a printer. if a bunch of people were to send their files at various times, the queue would be in sequence 
  of who was fastest, second fastest, and so on

_____________________________________________________________________
//////////////////////////  Hash Tables  ////////////////////////////

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

PSEUDO code:
create class for hashtable
end
insert values
end
Create function for hash
set the default value of sum be 0
increment the value of i by one until the length of the string is met
Add the value of i multiplied by three to sum(0)
end
return the value of sum division remainder of n
end



Applications of hash tables include:
Message Digest
Password Verification
Compiler Operation
Linking a file name and path together

_____________________________________________________________________
//////////////////////////  Binary Trees  ///////////////////////////

The final structure that I am going to discuss is trees or Binary search trees. When talking about trees, there are two main parts, the parent
 and the child. The parent is where the children branch off from, but can also be a child to a previous node. A child is what is branched off 
 from a parent node. A child does not necessarily have to have a node branched off from it, whereas a parent needs to be classed as a parent. 
 There is a third party which is the start of the tree; this is known as the root. A root does not have a parent.

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

Jeep, J. (2019, December 16). Implementing a Stack in JavaScript - Better Programming. Retrieved from https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1

Fawcett, R. T. A. A. (2020, March 20). 7 JavaScript data structures you must know. Retrieved from https://www.educative.io/blog/javascript-data-structures

Zakas, N. C. (2019, January 8). Computer science in JavaScript: Linked list. Retrieved from https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/

Real-world examples of recursion. (2008, September 19). Retrieved from https://stackoverflow.com/questions/105838/real-world-examples-of-recursion