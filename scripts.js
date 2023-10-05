function screenWidthChange(mediaQuery) {
  const checkbox = document.getElementById("showMenu");
  const menuOpt = document.getElementsByClassName("menuOptions");

  if (mediaQuery.matches) {
    for (let i = 0; i < menuOpt.length; i++) {
      menuOpt[i].style.display = "none";
    }

    checkbox.disabled = true;
    checkbox.checked = false;

    for (let i = 0; i < menuOpt.length; i++) {
      menuOpt[i].style.display = "flex";
    }
    console.log("Window larger then 860px");
  } else {
    console.log("Window smaller then 860px");
    checkbox.disabled = false;
    checkbox.checked = false;
    for (let i = 0; i < menuOpt.length; i++) {
      menuOpt[i].style.display = "inline-block";
    }
  }
}

const mediaQuery = window.matchMedia("(min-width: 860px)");

screenWidthChange(mediaQuery);

mediaQuery.addListener(screenWidthChange);
