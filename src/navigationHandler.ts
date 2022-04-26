import { toggleMenu } from "./navMenu"
const main = document.querySelector("#main") as HTMLElement
const introEl = document.querySelector("intro-section") as HTMLElement
const workEl = document.querySelector("work-section") as HTMLElement
const contactEl = document.querySelector("contact-section") as HTMLElement

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

  if (window.innerWidth > 767) {
    if (currentRoute === "home") {
      main.style.transform = "translateX(33.3333%)"
    }

    if (currentRoute === "work") {
      main.style.transform = "translateX(0)"
    }

    if (currentRoute === "contact") {
      main.style.transform = "translateX(-33.3333%)"
    }
  } else {
    if (currentRoute === "home") {
      introEl.scrollIntoView({ behavior: "smooth" })
    }

    if (currentRoute === "work") {
      workEl.scrollIntoView({ behavior: "smooth" })
    }

    if (currentRoute === "contact") {
      contactEl.scrollIntoView({ behavior: "smooth" })
    }
  }
}

window.changeRoute = changeRoute
