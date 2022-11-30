
const navLinkClick = () => {
  document.getElementById("toggleNav").addEventListener("click", () => {
    document.getElementById('toggle').checked = false;
  })
}

navLinkClick();