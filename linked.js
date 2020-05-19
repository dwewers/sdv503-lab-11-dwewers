const MyList = {
    head: {
        value: "This",
        next: {
            value: "Is",
            next: {
                value: "My",
                next:{
                    value: "List",
                next: null
                }
            }
        }
    }
};
console.log(MyList.head)
                //returns { value: 'This', next: { value: 'Is', next: { value: 'My', next: [Object] } } }



class MyLinkedList { //Creates a new class called MyLinkedClass
    constructor(value) { //Constructor with the parameter value
        this.head = { 
            value, //Identifies as value
            next: null //Next node is null
        };
        this.length = 1; //Assigns the length to 1
    }
}
console.log(new MyLinkedList('I hope this is correct'));
//  returns    MyLinkedList { head: { value: 'I hope this is correct', next: null } length: 1 }



// class NewClass{
//     constructor(head, tail){
//     this.head = head,
//     this.tail = tail;
//     }
// }