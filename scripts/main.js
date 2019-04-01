let taskInput = document.getElementsByClassName("task-input")[0];
let priorityInput = document.getElementsByClassName("priority-input")[0];
let taskfield = document.getElementsByClassName("task-field");

class Node {
  constructor(task, priority, owner) {
    this.task = task;
    this.priority = priority;
    this.owner = owner;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

function add(task, priority, owner) {
  var node = new Node(task, priority, owner);
  var current;
  if (this.head == null) this.head = node;
  else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
}

function printList() {
  var curr = this.head;
  var str = "";
  while (curr) {
    str += curr.element + " ";
    curr = curr.next;
  }
  console.log(str);
}

function random() {
  return Math.round(Math.random()); // returns either 0 or 1
}

function togglePriority(value) {
  if (typeof value == "number") {
    switch (value) {
      case 1:
        return "low";
      case 2:
        return "medium";
      case 3:
        return "high";
      default:
        return "bad";
    }
  } else {
    switch (value) {
      case "low":
        return 1;
      case "medium":
        return 2;
      case "high":
        return 3;
      default:
        return 0;
    }
  }
}

function addItem() {
  let owner = random() == 0 ? "bob" : "joe";
  let task = taskInput.value;
  let priority = priorityInput.value;

  taskList.push({
    owner: owner,
    task: task,
    priority: togglePriority(priority) // must equivate to number within object
  });

  taskInput.value = ""; // reset taskInput value
  taskfield[0].innerHTML = `<b>Item Added. Task:</b> ${task} <b>Priority:</b> ${priority} <b>Owner:</b> ${owner}`;
}

function displayItems() {
  taskList.sort((a, b) => (a.priority < b.priority ? 1 : -1)); // sort by priority
  let ul = "";

  Object.keys(taskList).map(keys => {
    let li = "";
    let key = taskList[keys];
    li = `<li> <b>Task:</b> ${key.task} <b>Priority:</b> ${togglePriority(
      key.priority
    )} <b>Owner:</b> ${key.owner} </li>`;
    ul += li;
  });

  taskfield[1].innerHTML = ul;
}
