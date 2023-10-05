function screenWidthChange(mediaQuery) {
  const checkbox = document.getElementById("showMenu");

  if (mediaQuery.matches) {
    checkbox.disabled = true;
    checkbox.checked = false;
    console.log("Window larger then 860px");
  } else {
    console.log("Window smaller then 860px");
    checkbox.disabled = false;
  }
}

const mediaQuery = window.matchMedia("(min-width: 860px)");

screenWidthChange(mediaQuery);

mediaQuery.addListener(screenWidthChange);
