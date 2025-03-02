// document.getElementById('statusBtn').addEventListener('click',
//   function(){

// })




// document.getElementById("back-now").addEventListener("click", function () {
//     window.location.href = "back.html";
//   });

// //   colorjavasript
//   document.getElementById('thimeChange').addEventListener('click', function() {
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF','#FFA07A','#800080'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
// });

 
// // date
// document.getElementById("new-date").innerText = new Date().toDateString();
// function time() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
//   }
  
// //   date done

// // alat btn 



const tasks = [
  {
    id: "1",
    category: "ShopEase",
    title: "Fix Mobile Button Issue",
    description: "Debug using Chrome DevTools, check for overlapping",
    deadline: "21 March 2025",
    status: "Complete"
  },
  {
    id: "2",
    category: "ShopEase",
    title: "Fix Mobile Button Issue",
    description: "Debug using Chrome DevTools, check for overlapping",
    deadline: "21 March 2025",
    status: "Complete"
  },
  {
    id: "3",
    category: "CloudSync",
    title: "Add Dark Mode",
    description: "Store the user's preference in localStorage, update CSS variables",
    deadline: "21 March 2025",
    status: "Complete"
  },
  {
    id: "4",
    category: "SwiftPay",
    title: "Optimize Home page",
    description: "Debug using Chrome DevTools, check for overlapping",
    deadline: "21 March 2025",
    status: "Complete"
  },
  {
    id: "5",
    category: "Meta",
    title: "Add new emoji 🤲",
    description: "Debug using Chrome DevTools, check for overlapping",
    deadline: "21 March 2025",
    status: "Complete"
  },
  {
    id: "6",
    category: "Google LLC",
    title: "Integrate OpenAI API",
    description: "Debug using Chrome DevTools, check for overlapping",
    deadline: "21 March 2025",
    status: "Complete"
  }
];

const todayDateAndTime = new Date().toLocaleDateString();
document.getElementById("new-date").innerText = todayDateAndTime;

document.addEventListener("DOMContentLoaded", () => {
  const taskCardsContainer = document.getElementById("taskCardsContainer");
  const history = document.getElementById("history");
  const statusIndicator = document.getElementById("statusindicator");
  let taskAssignedCount = parseInt(document.getElementById("taskAssigned").textContent);

  tasks.forEach(task => {
    const card = document.createElement("div");
    card.classList.add("card", "bg-slate-200", "text-neutral-content", "w-full", "h-[330px]");
    card.innerHTML = `
      <div class="card-body">
        <h2 class="bg-slate-100 w-24 card-title text-black rounded-md">${task.category}</h2>
        <h1 class="text-black text-2xl" id="taskTitle">${task.title}</h1>
        <p class="bg-slate-100 p-5 rounded-md border-b border-dashed text-gray-400">${task.description}</p>
        <div class="card-actions justify-between mt-1">
          <span class="text-black">
            Deadline <br>
            <h2 class="text-black">${task.deadline}</h2>
          </span>
          <button class="btn btn-primary" id="statusBtn-${task.id}">${task.status}</button>
        </div>
      </div>
    `;

    taskCardsContainer.appendChild(card);

    const statusBtn = document.getElementById(`statusBtn-${task.id}`);
    statusBtn.addEventListener("click", () => {
      alert("Do you want to complete this?");
      if (task.status === "Complete") {
        statusBtn.disabled = true;
        task.status = "Completed";
        statusBtn.textContent = task.status;
        
        // Decrease the Task Assigned count
        taskAssignedCount--;
        document.getElementById("taskAssigned").textContent = taskAssignedCount;

        // Increase the indicator count
        let indicatorCount = parseInt(statusIndicator.textContent);
        indicatorCount++;
        statusIndicator.textContent = indicatorCount;

        // Log activity to history
        const activityTime = new Date().toLocaleTimeString();
        history.innerHTML += `<p>Task "${task.title}" status changed to "Completed" at ${activityTime}</p>`;
      }

      document.getElementById("clearHistory").addEventListener("click", () => {
        history.innerText = "";
      });
    });
  });
});
