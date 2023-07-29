// use document.form["form-name"] to reference the form
let form = document.forms["fom"];

// bind the onsubmit property to a function to do some logic
function my(e) {
  // access the desired input through the var we setup
  let finalColor = form.color.value;
  console.log(finalColor);
  document.body.style.backgroundColor = finalColor;

  e.preventDefault();
}
document.getElementById("btn").addEventListener("click", my);
