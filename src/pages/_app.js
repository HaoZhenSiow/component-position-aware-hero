import GlobalStyle from "@/styles/GloabalStyle"

export default function App({ Component, pageProps }) {
  if (typeof document !== "undefined") {
    updateViewport()
    document.body.onresize = updateViewport
  }
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

function updateViewport() {
  const style = `
    :root {
      --viewport: ${innerWidth}px;
    }
  `
  setStyleTag('data-viewport', style)
}


function setStyleTag(meta, style) {
  const exist = document.querySelector(`[${meta}]`)
  const styleTag = document.createElement('style')
  styleTag.setAttribute(meta, '')
  styleTag.innerHTML = style
  if (exist) {
    exist.replaceWith(styleTag)
    return
  }
  document.head.appendChild(styleTag)
}