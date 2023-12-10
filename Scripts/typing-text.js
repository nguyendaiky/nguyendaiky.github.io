var i = 0;
var txt = 'Giáng sinh an lành! Diễm Hương ❤';
var speed = 150;
var typingTextHTML = document.getElementById("typing-text");

function typeWriter() {
  if (i < txt.length) {
    typingTextHTML.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}