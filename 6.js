function main() {
  let i = 0;
  let str = "hello";

  console.log(i);
  console.log(str);
  console.log(document);
}

function rollback() {
  let ref = document.querySelector("h1");
  ref.style.color = "black";
  ref.style.background = "white";
  ref.style.fontSize = "24px";

  ref.innerHTML = "Hello World";
}

function makeRed() {
  document.querySelector("h1").style.color = "red";
}

function makeGreen() {
  let ref = document.querySelector("h1");
  ref.style.color = "green";
  ref.style.background = "yellow";
  ref.style.fontSize = "48px";

  ref.innerHTML = "I am Green";
}

function makeBlue() {
  let ref = document.querySelector("h1");
  ref.style.color = "blue";

  ref.innerHTML = "I am blue now";
}
