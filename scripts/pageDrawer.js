const navigationDrawer = document.querySelector(".drawer");
const closeButton = navigationDrawer.querySelector("mdui-button-icon");
closeButton.addEventListener("click", () => navigationDrawer.open = false);