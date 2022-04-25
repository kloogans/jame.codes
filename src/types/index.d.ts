export {}

declare global {
  interface Window {
    toggleMenu: (position?: boolean) => void
    changeRoute: (route: string) => void
    toggleWorkItemPopout: (position?: boolean, type?: string) => void
    handleShowEmail: () => void
  }
}
