import './ax.js'
import { css, html } from './utils.js'

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

const template = html`
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

class NavBlock extends HTMLElement {
    connectedCallback() {
        if (!this.isConnected) return
        const shadow = this.attachShadow({ mode: 'open' })
        style.adopt(shadow)
        template.adopt(shadow)
    }
}
customElements.define('i-block', NavBlock)
