import { warningStyle } from './shared-css.js'
import { customElement, LitElement, html, property } from 'lit-element'

@customElement('i-dep')
export class Outdated extends LitElement {
    @property() from = ''
    @property() to = ''
    render() {
        return html`
            <div>
                👎 The content of this article has deprecated at ${new Date(this.to).toLocaleDateString()}. Information
                here may no longer correct or has no reference value.
                <br />
                <slot></slot>
            </div>
        `
    }
    static get styles() {
        return warningStyle
    }
}
