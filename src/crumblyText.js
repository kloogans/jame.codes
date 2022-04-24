const headerPreText = document.querySelector("#heading-pre-text")

function Banner() {
  const keyword = "jame"
  const denseness = 10
  let canvas
  let context

  let bgCanvas
  let bgContext
  let mouseOnScreen = false

  //Each particle/icon
  const parts = []

  const mouse = { x: -100, y: -100 }

  const itertot = 40
  let itercount = 0

  this.initialize = function (canvas_id) {
    canvas = document.getElementById(canvas_id)
    context = canvas.getContext("2d")

    context.x = 0

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

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
    bgContext.fillStyle = "#151515"
    bgContext.font = `${textSize}px impact`
    bgContext.fontWeight = "800"
    bgContext.fillText(
      keyword,
      window.innerWidth / 2 - textSize,
      window.innerHeight / 1.48
    )

    clear()
    getCoords()
  }

  const getCoords = function () {
    let imageData, pixel, height, width

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

    setInterval(update, 40)
  }

  const drawCircle = function (x, y) {
    const startx = Math.random() * canvas.width
    const starty = Math.random() * canvas.height

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

  const colors = ["#00fff0", "#fae500"]

  const update = function () {
    var i, dx, dy, sqrDist, scale
    itercount++
    clear()
    for (i = 0; i < parts.length; i++) {
      const color = colors[Number(Math.floor(Math.random() * 2).toFixed(0))]
      //If the dot has been released
      if (parts[i].r == true) {
        //Fly into infinity!!

        // if (
        //   parts[i].x2 > window.innerWidth ||
        //   parts[i].x2 <= 0 ||
        //   parts[i].y2 > window.innerHeight ||
        //   parts[i].y2 <= 0
        // ) {
        //   parts.splice(i, 1)
        //   continue
        // }

        parts[i].x2 += parts[i].v.x
        parts[i].y2 += parts[i].v.y
      }

      if (itercount == itertot) {
        parts[i].v = {
          x: Math.random() * 6 * 2 - 6,
          y: Math.random() * 6 * 2 - 6
        }
        parts[i].r = false
        headerPreText.style.opacity = 1
      }

      //Look into using svg, so there is no mouse tracking.
      //Find distance from mouse/draw!
      dx = parts[i].x - mouse.x
      dy = parts[i].y - mouse.y
      sqrDist = Math.sqrt(dx * dx + dy * dy)

      if (sqrDist < 20) {
        parts[i].c = color

        parts[i].r = true
      }

      //Draw the circle
      context.fillStyle = parts[i].c
      context.strokeStyle = "#151515"
      context.beginPath()
      context.rect(parts[i].x2, parts[i].y2, 10, 10)
      context.fill()
      context.stroke()
      context.closePath()
    }
  }

  const MouseMove = function (e) {
    if (e.layerX || e.layerX == 0) {
      //Reset particle positions
      mouseOnScreen = true

      mouse.x = e.layerX - canvas.offsetLeft
      mouse.y = e.layerY - canvas.offsetTop
    }
  }

  const MouseOut = function (e) {
    mouseOnScreen = false
    mouse.x = -100
    mouse.y = -100
  }

  //Clear the on screen canvas
  const clear = function () {
    context.fillStyle = "#151515"
    context.beginPath()
    context.rect(0, 120, canvas.width, canvas.height)
    context.closePath()
    context.fill()
  }
}

const banner = new Banner()
banner.initialize("crumble-text")
