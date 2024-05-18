var tid = 0;
$(document).ready(function () {
  $(".tasks").click(function () {
    var content = `
            <h1> Tasks </h1>
            <div class="navbar">
            <button id="displayTask">All Task</button>
                <button id="addTask">Add Task</button>
            </div>
            <div class = "con-func"></div>`;
    $(".content").html(content);
  });

  var completed = 0;
  var inProgress = 0;
  var pending = 0;

  // Display Task
  $(document).on("click", "#displayTask", function () {
    $.ajax({
      url: "/my-project/public/tasks.json",
      type: "GET",
      success: function (response) {
        var content = ``;
        response.forEach(function (task) {
          if (task.status != "completed") {
            content += `
                    <div class="taskAll">
        <h3>Task: ${task.title}</h3>
        <div style="display: flex;">
            <h4>Description</h4>
            <h6>: ${task.description}</h6>
        </div>
        <div style="display: flex;">
            <h4>Due Date</h4>
            <h6>: ${task.dueDate}</h6>
        </div>
        <div style="display: flex;">
            <h4>Priority</h4>
            <h6>: ${task.priority}</h6>
        </div>
        <div style="display: flex;">
            <h4>Status</h4>
            <h6>: ${task.status}</h6>
        </div>
        <div style="display: flex;">
            <h4>Assigned To</h4>
            <h6>: ${task.assignedTo}</h6>
        </div>
        <button class="btn btn-primary">Finished</button>
    </div>`;
          }
          if (task.status == "completed") {
            completed++;
          } else if (task.status == "in-progress") {
            inProgress++;
          } else {
            pending++;
          }
          tid = task.id;
        });
        $(".con-func").html(content);
      },
    });
  });
});

// Add Task
$(document).on("click", "#addTask", function () {
  const taskFormHTML = `
    <div class="card mb-4 ">
        <div class="card-body">
            <h2>Add Task</h2>
            <input type="hidden" id="taskId">
            <div class="mb-3">
                <input type="text" id="title" class="form-control empty" placeholder="Title">
            </div>
            <div class="mb-3">
                <input type="text" id="description" class="form-control empty" placeholder="Description">
            </div>
            <div class="mb-3">
                <input type="datetime-local" id="dueDate" class="form-control empty">
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
                <input type="text" id="assignedTo" class="form-control empty" placeholder="Assigned To">
            </div>
            <button id="confirmTask" class="btn btn-primary">Add Task</button>
        </div>
    </div>
`;
  $(".con-func").html(taskFormHTML);

  // onclick of addTask button, the task should be added in json file
  $(document).on("click", "#confirmTask", function () {
    const newTask = {
      id: tid + 1,
      title: $("#title").val(),
      description: $("#description").val(),
      dueDate: $("#dueDate").val(),
      priority: $("#priority").val(),
      status: $("#status").val(),
      assignedTo: $("#assignedTo").val(),
    };

    $.ajax({
      url: "/my-project/public/tasks.json",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(newTask),
        success: function (response) {
          // Check if the response is already parsed as JSON
          if (typeof response === "object") {
            // If so, append the newTask to the response array
            response.push(newTask);
            console.log(response);
          } else {
            // If not, parse the response as JSON and then append newTask
            var allTasksRecord = JSON.parse(response);
            allTasksRecord.push(newTask);
            console.log(allTasksRecord);
            }
            
          $(".empty").val("");
        },
    });
  });
});

//chat with ai
$(".chatai").click(function () {
  var content = "<div> Hello World </div>";
  $(".content").html(content);
});

//Dashboard
$(".dashboard").click(function () {
  var content = `<div id="taskChartContainer">
        <canvas id="taskChart"></canvas>
    </div>`;
  $(".content").html(content);

  // Sample data for the chart
  const taskData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        label: "Task Status",
        data: [20, 30, 50], // Sample data representing task counts
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Get the canvas element
  const taskChartCanvas = document.getElementById("taskChart");

  // Create the chart
  const taskChart = new Chart(taskChartCanvas, {
    type: "bar", // Change the chart type as needed (e.g., 'pie', 'line')
    data: taskData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
