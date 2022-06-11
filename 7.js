function makeRed() {
  let list = document.querySelectorAll("h1");

  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    item.style.color = "red";
  }
}
