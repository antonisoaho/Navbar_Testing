function unCheck(checkbox) {
  if (checkbox.checked) {
    console.log("Window screen too wide");
    checkbox.checked = false;
  }
}

function screenWidthChange(mediaQuery) {
  const checkbox = document.getElementById("showMenu");

  if (mediaQuery.matches) {
    checkbox.disabled = true;
    checkbox.checked = false;
    console.log("Window > 860px");
  } else {
    console.log("Window < 860px");
    checkbox.disabled = false;
  }
}

const mediaQuery = window.matchMedia("(min-width: 860px)");

screenWidthChange(mediaQuery);

mediaQuery.addListener(screenWidthChange);
