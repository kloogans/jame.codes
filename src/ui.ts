const emailContainer = document.querySelector("email-container") as HTMLElement
const emailButton = document.querySelector("#email-button") as HTMLElement
const footerText = document.querySelector("#footer-text") as HTMLElement
const date = new Date().getFullYear()

if (footerText) {
  footerText.innerHTML = ` &copy; ${date} jame.codes`
}

const handleShowEmail = (): void => {
  if (emailButton) {
    emailButton.style.display = "none"
    emailContainer.innerHTML = `<a href='mailto:jamesfromonline@gmail.com' class='text-xl text-[#00fff0] hover:text-[#02c0b5] focus:text-[#02c0b5] font-share-tech'>jamesfromonline@gmail.com</a>`
  }
}

window.handleShowEmail = handleShowEmail

export {}
