document.getElementById('changeColorBtn').addEventListener('click', function() {
    var colors = ['#0000FF',  '#DC143C']; 
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    document.body.style.backgroundColor = randomColor; 
});