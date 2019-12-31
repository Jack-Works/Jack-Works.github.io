import { LitElement, html } from '../../resources/deps.js'

class Badge extends LitElement {
    constructor() {
        super()
        this.type = ''
    }
    archived() {
        return html`
            <span title="This project is archived and no longer maintained.">【🗃 Archived】</span>
        `
    }
    render() {
        if (this.type === 'arch') return this.archived()
        return html``
    }
    static get properties() {
        return {
            type: { type: String },
        }
    }
}

customElements.define('i-badge', Badge, {})
