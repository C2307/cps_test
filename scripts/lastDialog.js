const dialog = document.querySelector(".example-fullscreen");
const closedialog = dialog.querySelector("mdui-button");
closedialog.addEventListener("click", () => dialog.open = false);