// Calculator JavaScript logic

// Initialize an empty string to store the current input
let string = "";

// Select all buttons with the class 'button'
let buttons = document.querySelectorAll('.button');

// Loop through each button and add a click event listener
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the text inside the clicked button
    let buttonText = e.target.innerHTML;

    // Replace display symbols with actual JS operators for evaluation
    if (buttonText === '×') {
      string += '*'; // Replace × with * for calculation
    } else if (buttonText === '÷') {
      string += '/'; // Replace ÷ with / for calculation
    }
    // If equals button is clicked, evaluate the expression
    else if (buttonText === '=') {
      try {
        string = eval(string); // Evaluate the math expression
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error"; // Handle invalid expressions
        string = "";
      }
    }
    // If clear button is clicked, reset the input
    else if (buttonText === 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    // For all other buttons, append the character to the string
    else {
      string += buttonText;
      document.querySelector('input').value = string;
    }
  });
});
