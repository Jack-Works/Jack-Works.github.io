import './ax.js'
import { css, html } from './utils.js'

const style = css`
    div {
        padding: 12px 0;
    }
    ax-reveal,
    ax-acrylic,
    ax-elevation,
    ax-pressure {
        display: flex;
        width: 100%;
    }
`

const template = html`
    <ax-pressure>
        <ax-acrylic>
            <ax-elevation>
                <ax-reveal>
                    <div>
                        <slot />
                    </div>
                </ax-reveal>
            </ax-elevation>
        </ax-acrylic>
    </ax-pressure>
`

class NavBlock extends HTMLElement {
    connectedCallback() {
        if (!this.isConnected) return
        const shadow = this.attachShadow({ mode: 'open' })
        style.adopt(shadow)
        template.adopt(shadow)
    }
}
customElements.define('i-block', NavBlock)
