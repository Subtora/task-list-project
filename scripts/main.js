var temp = (function() {
  let taskList = []; // initialize empty taskList array
  let taskDesc = document.getElementsByClassName("task-input")[0];
  let priority = document.getElementsByClassName("priority-input")[0];
  let output = document.getElementsByClassName("task-field")[0];
  let allOutput = document.getElementsByClassName("task-field")[1];
  let task;

  function add() {
    let out;
    let owner = rand() == 1 ? "Joe" : "Bob";
    task = {
      description: taskDesc.value,
      priority: togglePriority(priority.value),
      owner: owner
    };
    out = `Description: ${taskDesc.value}, Priority: ${
      priority.value
    }, Owner:${owner}`;
    output.innerHTML = out;
    taskList.push(task);
  }

  function sort(obj) {
    obj.sort(function(a, b) {
      return b.priority - a.priority;
    });
  }

  function display() {
    sort(taskList);
    let out = "<ul>";
    for (var i = 0; i < taskList.length; i++) {
      out += `<li>Description: ${
        taskList[i].description
      }, Priority: ${togglePriority(taskList[i].priority)}, Owner: ${
        taskList[i].owner
      }</li>`;
    }
    out += "</ul>";
    allOutput.innerHTML = out;
  }
  return {
    display: display,
    add: add
  };
})();

function rand() {
  return Math.round(Math.random());
}

function togglePriority(value) {
  if (typeof value == "number") {
    switch (value) {
      case 3:
        return "high";
      case 2:
        return "medium";
      case 1:
        return "low";
      default:
        return "error";
    }
  } else {
    switch (value) {
      case "high":
        return 3;
      case "medium":
        return 2;
      case "low":
        return 1;
      default:
        return 0;
    }
  }
}

function displayItems() {
  temp.display();
}
function addItem() {
  temp.add();
}
