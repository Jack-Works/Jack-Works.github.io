import { register as hl } from 'https://cdn.skypack.dev/@ax-design/reveal-highlight'
import { register as acrylic } from 'https://cdn.skypack.dev/@ax-design/acrylic'
import { register as pressure } from 'https://cdn.skypack.dev/@ax-design/pressure'
import { register as elevation } from 'https://cdn.skypack.dev/@ax-design/elevation'

hl({
  compat: true,
})
acrylic({})
pressure({})
elevation({})

const css = String.raw
const style = css`
  .icon {
    left: 20px;
    top: 0;
    position: absolute;
  }
  ax-reveal,
  ax-acrylic,
  ax-elevation,
  ax-pressure,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100%;
  }
`
const styleInstance = (() => {
  try {
    const o = new CSSStyleSheet()
    o.replace(style)
    return o
  } catch (e) {}
})()

class Block extends HTMLElement {
  connectedCallback() {
    if (!this.isConnected) return

    this.attachShadow({ mode: 'open' })
    if (styleInstance) {
      this.shadowRoot.adoptedStyleSheets = [styleInstance]
    }
    this.shadowRoot.innerHTML = `${styleInstance ? '' : `<style>${style}</style>`}
        <ax-pressure>
        <ax-acrylic>
        <ax-elevation>
        <ax-reveal>
        <div>
        <span class="icon"><slot name="icon" /></span>
        <span class="text"><slot /></span>
        </div>
        </ax-reveal>
        </ax-elevation>
        </ax-acrylic>
        </ax-pressure>
        `
  }
}
customElements.define('i-block', Block)
