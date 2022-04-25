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

const keyword = "jame"
const denseness = 10

const parts: PartsProps[] = []

const mouse = { x: -100, y: -100 }

const itertot = 40
let itercount = 0

const initialize = function (canvas_id: string) {
  canvas = document.getElementById(canvas_id) as HTMLCanvasElement
  if (canvas) {
    context = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // if (context) context.x = 0
  }

  bgCanvas = document.createElement("canvas")
  bgContext = bgCanvas.getContext("2d")

  bgCanvas.width = window.innerWidth
  bgCanvas.height = window.innerHeight

  canvas.addEventListener("mousemove", MouseMove, false)
  canvas.addEventListener("mouseout", MouseOut, false)

  start()
}

const start = function () {
  const textSize = window.innerWidth > 767 ? 300 : 150
  if (bgContext) {
    bgContext.fillStyle = "#151515"
    bgContext.font = `${textSize}px impact`
    bgContext.fillText(
      keyword,
      window.innerWidth / 2 - textSize,
      window.innerHeight / 1.48
    )
  }

  clear()
  getCoords()
}

const getCoords = function () {
  let imageData, pixel, height, width

  if (bgContext && bgCanvas && canvas) {
    imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height)

    // quickly iterate over all pixels - leaving density gaps
    for (height = 0; height < bgCanvas.height; height += denseness) {
      for (width = 0; width < bgCanvas.width; width += denseness) {
        pixel = imageData.data[(width + height * bgCanvas.width) * 4 - 1]
        //Pixel is black from being drawn on.
        if (pixel == 255) {
          drawCircle(width, height)
        }
      }
    }
  }

  setInterval(update, 40)
}

const drawCircle = function (x: number, y: number) {
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

const colors = ["#00fff0", "#fae500"]

const update = function () {
  var i, dx, dy, sqrDist
  itercount++
  clear()
  for (i = 0; i < parts.length; i++) {
    const color = colors[Number(Math.floor(Math.random() * 2).toFixed(0))]
    if (parts[i].r == true) {
      parts[i].x2 += parts[i].v.x
      parts[i].y2 += parts[i].v.y
    }

    if (itercount == itertot) {
      parts[i].v = {
        x: Math.random() * 6 * 2 - 6,
        y: Math.random() * 6 * 2 - 6
      }
      parts[i].r = false
      if (headerPreText) {
        headerPreText.style.opacity = "1"
      }
      if (headerPostText) {
        headerPostText.style.opacity = "1"
      }
    }

    dx = parts[i].x - mouse.x
    dy = parts[i].y - mouse.y
    sqrDist = Math.sqrt(dx * dx + dy * dy)

    if (sqrDist < 20) {
      parts[i].c = color

      parts[i].r = true
    }

    if (context) {
      context.fillStyle = parts[i].c
      context.strokeStyle = "#151515"
      context.beginPath()
      context.rect(parts[i].x2, parts[i].y2, 10, 10)
      context.fill()
      context.stroke()
      context.closePath()
    }
  }
}

const MouseMove = function (e: MouseEvent) {
  if (e.offsetX || e.offsetX == 0) {
    if (canvas) {
      mouse.x = e.offsetX - canvas.offsetLeft
      mouse.y = e.offsetY - canvas.offsetTop
    }
  }
}

const MouseOut = function () {
  mouse.x = -100
  mouse.y = -100
}

//Clear the on screen canvas
const clear = function () {
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
