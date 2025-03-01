document.getElementById("back-now").addEventListener("click", function () {
    window.location.href = "back.html";
  });

//   colorjavasript
  document.getElementById('thime-change').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF','#FFA07A','#800080','#FF00FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

