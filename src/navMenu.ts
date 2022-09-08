const body = document.querySelector("body") as HTMLElement
const navMenu = document.querySelector("#nav-menu") as HTMLElement
const navMenuButton = document.querySelector("#nav-menu-button") as HTMLElement
const navMenuClickable = document.querySelector(
  "nav-menu-clickable"
) as HTMLElement

let menuIsToggled = false

export const toggleMenu = (position?: boolean): void => {
  menuIsToggled = position ?? !menuIsToggled
  if (menuIsToggled) {
    if (navMenu) {
      navMenu.style.transform = "translate(-14px, 12px)"
      body.style.overflowY = "hidden"
    }

    navMenuButton.style.backgroundColor = "#fae500"
    navMenuButton.style.color = "#151515"
    navMenuButton.innerHTML = "<div class='close-icon'></div> close"
    navMenuClickable.style.display = "block"
    navMenuClickable.addEventListener("click", () => toggleMenu())
  } else {
    navMenu.style.transform = "translate(calc(100% + 10px), 12px)"
    navMenuButton.style.color = ""
    navMenuButton.style.backgroundColor = ""
    navMenuButton.innerHTML = "<div class='menu-icon mr-1'></div> menu"
    navMenuClickable.style.display = "none"
    navMenuClickable.removeEventListener("click", () => toggleMenu())
    body.style.overflowY = "auto"
  }
}

window.toggleMenu = toggleMenu
