//top section DOM elements
const input = document.getElementsByClassName("task-input")[0];
const priority = document.getElementsByClassName("priority-input")[0];
const taskField = document.getElementsByClassName("task-field");

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printList() {
    var curr = this.head;
    var out = "<ul>";
    while (curr) {
      out += `<li>Task: ${curr.element.task}, Priority: ${
        curr.element.priority
      }, Owner: ${curr.element.owner} </li>`;
      curr = curr.next;
    }
    out += "</ul>";
    taskField[1].innerHTML = out;
  }
}
var ll = new LinkedList();

function bobJoe() {
  return Math.round(Math.random()) == 0 ? "bob" : "joe";
}

function addItem() {
  ll.add({
    task: `${input.value}`,
    priority: `${priority.value}`,
    owner: `${bobJoe()}`
  });
  taskField[0].innerHTML = `Task: ${input.value}, Priority: ${
    priority.value
  }, Owner: ${bobJoe()}`;
}

function displayItems() {
  ll.printList();
  console.log(ll);
}
