import { recommendStyle } from './shared-css.js'
import { customElement, LitElement, html, property } from 'lit-element'

const status = {
    active: '👀 This experiment is active.',
    success: '✔️ The experiment has ended successfully.',
    fail: '❌ This experiment has failed.',
}
@customElement('i-exp')
export class Experimental extends LitElement {
    @property() status: 'active' | 'success' | 'fail' = 'active'
    render() {
        return html`
            <div>
                🔬 This is an experiment. It may not ready for the production environment, and just created for PoC.
                <br />
                ${status[this.status]}
                <br />
                <slot></slot>
            </div>
        `
    }
    static get styles() {
        return recommendStyle
    }
}
