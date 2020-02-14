import { customElement, LitElement, html, property } from 'lit-element'

@customElement('i-badge')
export class Badge extends LitElement {
    @property({ type: String }) type = ''
    archived() {
        return html`
            <span title="This project is archived and no longer maintained.">【🗃 Archived】</span>
        `
    }
    render() {
        if (this.type === 'arch') return this.archived()
        return html``
    }
}
