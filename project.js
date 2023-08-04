document.addEventListener("DOMContentLoaded", function() {
    // Function 1: Change the button text when clicked
    function changeButtonText() {
      const button = document.getElementById("myButton");
      button.innerText = "Button Clicked!";
    }
  
    // Function 2: Show an alert when clicked
    function showAlert() {
      alert("Button was clicked!");
    }
  
    const myButton = document.getElementById("myButton");
  
    // Add event listener to call both functions when the button is clicked
    myButton.addEventListener("click", function() {
      changeButtonText();
      showAlert();
    });
  });
   