const message = "Hey Ayisha,You light up my life in ways I can't explain. I made this just for you. I love you forever. 💌";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("message").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

window.onload = typeWriter;
