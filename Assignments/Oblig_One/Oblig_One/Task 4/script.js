// This event waits until the HTML page is fully loaded
// We will explain events like this later in the course
document.addEventListener("DOMContentLoaded", function () {

  // -------- LATER CURRICULUM --------
  // The lines below get elements from the HTML using their id
  // We will cover how document.getElementById works later
  const form = document.getElementById("convertForm");
  const metersInput = document.getElementById("meters");
  const unitSelect = document.getElementById("unit");
  // -------- END LATER CURRICULUM --------


  // This listens for the form being submitted
  // Event listeners are also covered later
  form.addEventListener("submit", function (e) {

    // Prevents the page from reloading when the form is submitted
    // This is browser behavior we explain later
    e.preventDefault();
    console.log("test");


    // -------- LATER CURRICULUM --------
    // Reads values from the input and dropdown
    // We will explain how to read values from forms later
    const meters = Number(metersInput.value);
    const factor = Number(unitSelect.value);
    const unitName =
      unitSelect.options[unitSelect.selectedIndex].dataset.name;
    // -------- END LATER CURRICULUM --------


    // ================= STUDENT TASK =================
    // TODO:
    // 1. Calculate the converted result using meters and factor
    // 2. Show the result using alert()
    //
      const lengthConverter = (number) => {
          console.log(Number(factor));
          const convertTall = factor * number;
          alert(`${Number(meters)} meters are exactly ${Number(convertTall).toFixed(2)} ${unitName} long!`)
      };
      lengthConverter(meters);

    // Example output:
    // "20 meters are exactly 106 bananas long"
    // =============== END STUDENT TASK ===============

  });
});
