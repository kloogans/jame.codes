import { toggleMenu } from "./navMenu"
const main = document.querySelector("main") as HTMLElement
const introEl = document.querySelector("#intro") as HTMLElement
const workEl = document.querySelector("#work") as HTMLElement
const contactEl = document.querySelector("#contact") as HTMLElement

let currentRoute = "home"

export const changeRoute = (route: string): void => {
  const btn = document.querySelector(`#btn-${route}`) as HTMLElement
  const currentBtn = document.querySelector(
    `#btn-${currentRoute}`
  ) as HTMLElement
  btn.classList.add("active")
  currentBtn.classList.remove("active")
  currentRoute = route
  toggleMenu(false)

  if (window.innerWidth > 1025) {
    switch (currentRoute) {
      case "home":
        main.style.transform = "translateX(33.3333%)"
        break
      case "work":
        main.style.transform = "translateX(0)"
        break
      case "contact":
        main.style.transform = "translateX(-33.3333%)"
        break
      default:
        main.style.transform = "translateX(33.3333%)"
    }
    return
  }

  switch (currentRoute) {
    case "home":
      introEl.scrollIntoView({ behavior: "smooth" })
      break
    case "work":
      workEl.scrollIntoView({ behavior: "smooth" })
      break
    case "contact":
      contactEl.scrollIntoView({ behavior: "smooth" })
      break
    default:
      introEl.scrollIntoView({ behavior: "smooth" })
  }
}

window.changeRoute = changeRoute
