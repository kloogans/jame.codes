document.onload = () => {
  const footerText = document.querySelector("#footer-text")
  const date = new Date().getFullYear()
  if (footerText) footerText.innerHTML = ` &copy; ${date} videojame.com`
}

export {}
