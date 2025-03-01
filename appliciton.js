document.getElementById("back-now").addEventListener("click", function () {
    window.location.href = "back.html";
  });

//   colorjavasript
  document.getElementById('thimeChange').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF','#FFA07A','#800080'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

 
// date
document.getElementById("new-date").innerText = new Date().toDateString();
function time() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
//   date done


