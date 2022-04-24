import { toggleMenu } from "./navMenu"

// const introSection = document.querySelector("#intro") as HTMLElement
// const workSection = document.querySelector("work-section") as HTMLElement
const main = document.querySelector("#main") as HTMLElement

let currentRoute = "home"

export const changeRoute = (route: string) => {
  const btn = document.querySelector(`#btn-${route}`) as HTMLElement
  const currentBtn = document.querySelector(
    `#btn-${currentRoute}`
  ) as HTMLElement
  btn.classList.add("active")
  currentBtn.classList.remove("active")
  currentRoute = route
  toggleMenu(false)

  if (currentRoute === "home") {
    main.style.transform = "translateX(0)"
  }

  if (currentRoute === "work") {
    main.style.transform = "translateX(-50%)"
  }
}
