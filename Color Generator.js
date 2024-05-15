function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    var colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = generateRandomColor();
  }