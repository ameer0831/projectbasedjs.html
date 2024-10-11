// Initialize counter value
let count = 0;

// Select the value display and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

// Loop through all the buttons and add event listeners
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    // Determine which button was clicked
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('reset')) {
      count = 0;
    }

    // Change the display based on the counter value
    value.textContent = count;

    // Change color based on positive or negative value
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = '#222'; // default color
    }
  });
});
