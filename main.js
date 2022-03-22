window.onload = function() {
  function start() {
    mouseClickMethod(testCalendar);
    console.log("test");
  }
  function testCalendar(e) {
    element = getElementAt(e.getX(), e.getY());
    if(element.tagName == "TD" && element.parentElement.className=="cal-row") {
      node = document.getElementById("placeholder-button");
      element.appendChild(node);
      node.style.display = "block";
    }
  }
                // Your code goes here
                if (typeof start === 'function') {
                    start();
                }
            };
