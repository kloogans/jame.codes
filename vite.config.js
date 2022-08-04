import ViteRadar from "vite-plugin-radar"

export default {
  plugins: [
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: "G-SE0XZXRMD4"
      }
    })
  ]
}
