// This is an to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's  element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

// Function Description

// Complete the printLinkedList function in the editor below.

// printLinkedList has the following parameter(s):

// SinglyLinkedListNode head: a reference to the head of the list
// Print

// For each node, print its  value on a new line (console.log in Javascript).
// Input Format

// The first line of input contains , the number of elements in the linked list.
// The next  lines contain one element each, the  values for each node.

// Note: Do not read any input from stdin/console. Complete the printLinkedList function in the editor below.

// parameters: a linked list of integers where the first element is the number of elements
//returns: a linked list of the number of integers specified by the first element
function printLinkedList(head) {
    let currentNode = head;
    while (currentNode != null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
// examples:
printLinkedList(2,13,16) // 13,16

