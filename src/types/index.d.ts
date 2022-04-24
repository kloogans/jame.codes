export {}

declare global {
  interface Window {
    toggleMenu: (position?: boolean) => void
  }
}
