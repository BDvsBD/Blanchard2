const btn = document.querySelector(".events__card-btn");
const content = document.querySelector(".events__hidden");

btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("events__hidden-active")) {
    btn.textContent = "Все события";
  } else {
    btn.textContent = "Меньше событий";
  }
  document.querySelectorAll('.events__hidden').forEach(function (eventHidden) {
    eventHidden.classList.toggle('events__hidden-active')
  })
}

function handleButtonClick() {
  document.getElementById("events").scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth"
  });
}
document.querySelector('.events__card-btn').addEventListener('click', handleButtonClick);
