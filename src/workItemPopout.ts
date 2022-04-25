import { workItems } from "./workItems"

type WorkItemPopoutProps = {
  title: string
  logo: string
  image: string
  description: string
  url: string
  stack: string[]
}

const popoutContainer = document.querySelector(
  "work-item-popout"
) as HTMLElement
const popoutClickableLayer = document.querySelector(
  "work-item-popout-clickable"
) as HTMLElement

let popoutIsToggled = false

const createTemplate = (data: WorkItemPopoutProps): string => {
  const { title, logo, description, url } = data
  return `
        <div class="flex flex-col items-center justify-center z-50 bg-zinc-900 p-4 w-full h-full overflow-y-auto overflow-x-hidden">
            <img class='mb-2' src="${logo}" alt="${title}" style="width: 4rem; height: 4rem;" />
            <div class="text-2xl text-white font-share-tech text-center mb-4">
                ${title}
                <div style='height: 4px; width: 100%; background: white;'></div>
            </div>
            
            <div class="text-md text-white font-share-tech flex-auto w-full">
                <span class='mb-4'>${description}</span>
                <ul style='grid-template-columns: 1fr 1fr 1fr 1fr; gap: 4px; margin-top: 1.25rem;' class='grid place-items-center w-full'>
                    ${data.stack
                      .map(
                        (stack) =>
                          `<li class='px-2 py-1 mr-2 text-black text-center text-md font-share-tech bg--yellow'>${stack}</li>`
                      )
                      .join("")}
                </ul>
            </div>
            <a class='text-lg text-black w-full main-btn main-btn--teal px-1 py-2 font-share-tech' href="${url}" target="_blank" rel='no-referrer'>visit ${title}</a>
        </div>
    `
}

const renderPopoutContent = (type: string = "mepage"): void => {
  const workItemEl = document.querySelector("work-item") as HTMLElement
  if (workItemEl) {
    const data = workItems.find((item) => item.title === type)
    if (data) {
      workItemEl.innerHTML = createTemplate(data)
    }
  }
}

export const toggleWorkItemPopout = (
  position?: boolean,
  type?: string
): void => {
  popoutIsToggled = position ?? !popoutIsToggled

  if (popoutIsToggled) {
    popoutClickableLayer.style.display = "block"
    popoutClickableLayer.addEventListener("click", () => toggleWorkItemPopout())
    if (popoutContainer) {
      popoutContainer.style.transform = "translate(14px, 132px)"
      if (type) renderPopoutContent(type)
    }
  } else {
    popoutContainer.style.transform = "translate(calc(-100% - 10px), 132px)"
    popoutClickableLayer.style.display = "none"
    popoutClickableLayer.removeEventListener("click", () =>
      toggleWorkItemPopout()
    )
  }
}

window.toggleWorkItemPopout = toggleWorkItemPopout
export {}
