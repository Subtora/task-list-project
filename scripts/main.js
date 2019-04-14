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
    var str = "";
    while (curr) {
      str += curr.element + "\n";
      curr = curr.next;
    }
    console.log(str);
  }
}

function addItem() {
  var ll = new LinkedList();
  for (var i = 0; i < 10; i++) {
    ll.add(i);
  }
  ll.printList();
}
