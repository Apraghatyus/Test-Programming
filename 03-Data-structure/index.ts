// Data Structrure
// 1. Array
/* A Array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). */
let arr: string[] = [
    "Nike",
    "Adidas",
    "Puma"
];
arr.push("Reebok"); // create
arr[1] = "Under Armour"; // update
arr.sort(); //sort
arr.splice(2, 1); // delete

// 2. Linked List
/* A linked list is a linear data structure where each element is a separate object. Each element (we will call it a node) of a list is comprising of two items - the data and a reference to the next node. The last node has a reference to null. The entry point into a linked list is called the head of the list. It should be noted that head is not a separate node, but the reference to the first node. If the list is empty then the head is a null reference. */
let linkedList: { name: string; age: number } = {
  name: "John",
  age: 30
};
linkedList.name = "Jane"; // update
/* delete linkedList.age // delete*/

// 3. Interface
/* A interface is a  */