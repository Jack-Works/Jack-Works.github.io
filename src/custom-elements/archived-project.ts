import { deprecatedStyle } from './shared-css'
import { customElement, LitElement, html, property } from 'lit-element'

@customElement('i-arch')
export class Archived extends LitElement {
    @property() working = false
    @property() to = ''
    @property() from = ''
    render() {
        return html`
            <div>
                ${this.working ? '👎' : '💥'} This project has stopped maintained since
                ${new Date(this.to).toLocaleDateString()}.<br />${this.working
                    ? 'This project can work properly now.'
                    : 'This project can not work properly now.'}
                <br />
                <slot></slot>
            </div>
        `
    }
    static get styles() {
        return deprecatedStyle
    }
}
