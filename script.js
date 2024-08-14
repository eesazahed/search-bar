const input = document.querySelector("input");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    window
      .open(`https://google.com/search?q=${encodeURI(input.value)}`, "_blank")
      .focus();
  } else {
    const audio = new Audio("./assets/sounds/click.mp3");
    audio.play();
  }
});
