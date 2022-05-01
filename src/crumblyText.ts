const headerPreText = document.querySelector("#heading-pre-text") as HTMLElement
const headerPostText = document.querySelector(
  "#heading-post-text"
) as HTMLElement

type Coordinates = {
  x: number
  y: number
}

type PartsProps = {
  c: string
  x: number
  y: number
  x2: number
  y2: number
  r: boolean
  v: Coordinates
}

let canvas: HTMLCanvasElement | null
let context: CanvasRenderingContext2D | null
let bgCanvas: HTMLCanvasElement | null
let bgContext: CanvasRenderingContext2D | null

const keyword = "james"
const denseness = 10

const parts: PartsProps[] = []

const mouse = { x: -100, y: -100 }

const itertot = 40
let itercount = 0
let isAnimating = true

const initialize = (canvas_id: string) => {
  canvas = document.getElementById(canvas_id) as HTMLCanvasElement
  if (canvas) {
    context = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  bgCanvas = document.createElement("canvas")
  bgContext = bgCanvas.getContext("2d")

  bgCanvas.width = window.innerWidth
  bgCanvas.height = window.innerHeight

  canvas.addEventListener("mousedown", onMouseDown, false)
  canvas.addEventListener("mouseup", onMouseUp, false)

  start()
}

const start = () => {
  const textSize = window.innerWidth > 767 ? 300 : 140
  if (bgContext) {
    bgContext.fillStyle = "#020202"
    bgContext.font = `${textSize}px impact`
    bgContext.fillText(
      keyword,
      window.innerWidth / (window.innerWidth > 767 ? 2.2 : 2.5) - textSize,
      window.innerHeight / (window.innerWidth > 767 ? 1.48 : 2)
    )
  }

  clearCanvas()
  getCoordinates()
}

let timer: ReturnType<typeof setInterval>

const getCoordinates = () => {
  let imageData, pixel, height, width

  if (bgContext && bgCanvas && canvas) {
    imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height)

    for (height = 0; height < bgCanvas.height; height += denseness) {
      for (width = 0; width < bgCanvas.width; width += denseness) {
        pixel = imageData.data[(width + height * bgCanvas.width) * 4 - 1]
        if (pixel == 255) {
          drawPixel(width, height)
        }
      }
    }
  }
  clearTimeout(timer)
  timer = setInterval(updateCanvas, 60)
}

const drawPixel = (x: number, y: number) => {
  if (canvas) {
    const startx = Math.random() * canvas?.width
    const starty = Math.random() * canvas?.height

    const velx = (x - startx) / itertot
    const vely = (y - starty) / itertot

    parts.push({
      c: "#7000fa", // + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16)
      x: x, //goal position
      y: y,
      x2: startx, //start position
      y2: starty,
      r: true, //Released (to fly free!)
      v: { x: velx, y: vely }
    })
  }
}

const updateCanvas = () => {
  let dx, dy, sqrDist
  itercount++
  clearCanvas()

  parts.map((part, i) => {
    if (part.r === true) {
      part.x2 += part.v.x
      part.y2 += part.v.y
    }

    if (itercount == itertot) {
      part.v = {
        x: Math.random() * 6 * 2 - 6,
        y: Math.random() * 6 * 2 - 6
      }

      part.r = false
      clearTimeout(timer)
      isAnimating = false

      if (headerPreText) {
        headerPreText.style.opacity = "1"
      }
      if (headerPostText) {
        headerPostText.style.opacity = "1"
      }
    }

    if (canvas && part.y2 > canvas.height) {
      parts.splice(i, 1)
    }

    if (canvas && part.x2 > canvas.width) {
      parts.splice(i, 1)
    }

    dx = part.x - mouse.x
    dy = part.y - mouse.y
    sqrDist = Math.sqrt(dx * dx + dy * dy)

    if (sqrDist < 20) {
      part.c = "#7000fa"

      part.r = true
    }

    if (context) {
      context.fillStyle = part.c
      context.strokeStyle = "#020202"
      context.beginPath()
      context.rect(part.x2, part.y2, 10, 10)
      context.fill()
      context.stroke()
      context.closePath()
    }
  })
}

const colors = ["#00fff0", "#fae500"]
const changePixelColors = () => {
  let dx, dy, sqrDist
  itercount++
  clearCanvas()

  parts.map((part) => {
    const color = Math.floor(Math.random() * colors.length)
    dx = part.x - mouse.x
    dy = part.y - mouse.y
    sqrDist = Math.sqrt(dx * dx + dy * dy)

    if (sqrDist < 20) {
      part.c = colors[color]

      part.r = false
    }

    if (context) {
      context.fillStyle = part.c
      context.strokeStyle = "#020202"
      context.beginPath()
      context.rect(part.x2, part.y2, 10, 10)
      context.fill()
      context.stroke()
      context.closePath()
    }
  })
}

const onMouseDown = (e: MouseEvent) => {
  if (!isAnimating) {
    if (e.offsetX || e.offsetX == 0) {
      if (canvas) {
        mouse.x = e.offsetX - canvas.offsetLeft
        mouse.y = e.offsetY - canvas.offsetTop
      }
    }
    changePixelColors()
  }
}

const onMouseUp = () => {
  mouse.x = -100
  mouse.y = -100
  clearInterval(timer)
}

const clearCanvas = () => {
  if (context && canvas) {
    context.fillStyle = "#151515"
    context.beginPath()
    context.rect(0, 120, canvas.width, canvas.height)
    context.closePath()
    context.fill()
  }
}

initialize("crumble-text")
export {}
