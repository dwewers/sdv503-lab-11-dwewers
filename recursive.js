function recursiveFunc(myNumber) { //Creates our recursive function called "recursiveFunc" with the parameter myNumber
    
let nextVal = myNumber - 1; //The next value will be the previous value -1
    /*
    i.e
    10 - 1 = 9
    5 - 1 = 4
    3 - 1 = 2
    */

    if (nextVal > 0) { //If the next value will be greater than 0, call the function to the value -1
        recursiveFunc(nextVal);
    }
    console.log(myNumber);//prints myNumber "10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
}


recursiveFunc(10); 
//Calling the function with the paramater myNumber assigned as 10
//This means that when we console log (10), it will count down from 10