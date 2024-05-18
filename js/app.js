$(document).ready(function () {
  $(".tasks").click(function () {
    var content = `
        
            <h1> Tasks </h1>
            <div class="navbar">
                <button id="addTask">Add Task</button>
                <button id="displayTask">Display Task</button>
                <button id="removeTask">Remove Task</button>
            </div>
            <div class = "con-func"></div>`;
    $(".content").html(content);
  });
    
    // Display Task
    $(document).on("click", "#displayTask", function () {
        const taskFormHTML = ``;
    });
    
  $(document).on("click", "#addTask", function () {
    const taskFormHTML = `
    <div class="card mb-4 ">
        <div class="card-body">
            <h2>Add/Edit Task</h2>
            <input type="hidden" id="taskId">
            <div class="mb-3">
                <input type="text" id="title" class="form-control" placeholder="Title">
            </div>
            <div class="mb-3">
                <input type="text" id="description" class="form-control" placeholder="Description">
            </div>
            <div class="mb-3">
                <input type="datetime-local" id="dueDate" class="form-control">
            </div>
            <div class="mb-3">
                <select id="priority" class="form-control">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div class="mb-3">
                <select id="status" class="form-control">
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div class="mb-3">
                <input type="text" id="assignedTo" class="form-control" placeholder="Assigned To">
            </div>
            <button id="addTask" class="btn btn-primary">Add Task</button>
            <button id="updateTask" class="btn btn-success" style="display:none;">Update Task</button>
        </div>
    </div>
`;
    $(".con-func").html(taskFormHTML);
  });

  //chat with ai
  $(".chatai").click(function () {
    var content = "<div> Hello World </div>";
    $(".content").html(content);
  });
});
