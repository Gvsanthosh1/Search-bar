let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");
dropdownBtn.onclick = () => {
  if (list.classList.contains("show")) {
    icon.style.rotate = "0deg";
  } else {
    icon.style.rotate = "-180deg";
  }
  list.classList.toggle("show");
};

window.onclick = (event) => {
  if (
    event.target.id !== "drop-text" &&
    event.target.id !== "span" &&
    event.target.id !== "icon"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (event) {
    span.innerText = event.target.innerText;

    if (event.target.innerText == "Everything") {
      input.placeholder = "Search Anything";
    }
    input.placeholder = `Search in ${event.target.innerText}`;
  };
}
