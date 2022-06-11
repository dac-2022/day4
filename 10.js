function addMore() {
  let ref = document.querySelector("div");

  let oldValue = ref.innerHTML;
  let newElement = "<h1>Hello Universe</h1>";

  // MODIFICATION :: RESET IS DONE HERE.
  ref.innerHTML = oldValue + newElement;
}

function add100More() {
  let ref = document.querySelector("div");

  let oldValue = ref.innerHTML;
  let newElement = "<h1>Hello Universe</h1>";
  newElement += "<p>Shantanu</p>";

  let newValue = oldValue;
  for (let i = 0; i < 5; i++) {
    newValue += newElement;
  }

  // MODIFICATION :: RESET IS DONE HERE.
  ref.innerHTML = newValue;
}
