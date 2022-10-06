var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var myContainer = document.getElementById("myContainer");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 0.5);
  function frame() {
    if (pos == 1500) {
        elem.style.display = 'none'; 
        myContainer.style.display = 'none'; 
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + 'px'; 
      myContainer.style.left = pos + 'px'; 
    }
  }
}

myMove();


UIkit.util.ready(function () {

  var bar = document.getElementById('js-progressbar');

  var animate = setInterval(function () {

      bar.value += 10;

      if (bar.value >= bar.max) {
          clearInterval(animate);
      }

  }, 1000);

});


const message =
  "Thank you for submitting your message. We will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let NamePers = document.getElementById("name").value;
    alert("Hi " + NamePers + " ! " + message);
  });
