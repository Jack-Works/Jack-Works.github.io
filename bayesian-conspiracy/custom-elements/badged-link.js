import { LitElement, html, css } from '../../resources/deps.js'

/**
 * @param {string} href
 */
function parseURL(href) {
    const url = new URL(href, location.href)
    const data = {
        image: '',
        alt: '',
        href,
    }
    if (href.startsWith(`https://bugzilla.mozilla.org/show_bug.cgi`)) {
        const id = url.searchParams.get('id')
        data.alt = `bugzilla ${id}`
        data.image = `https://img.shields.io/bugzilla/${id}?style=flat-square`
    } else if (url.hostname.endsWith('github.com') && url.pathname.match(/issues|pull/)) {
        // https://github.com/Agoric/realms-shim/issues/47
        let [, org, repo, type, id] = url.pathname.split('/')
        if (type === 'pull') type = 'pulls'
        data.image = `https://img.shields.io/github/${type}/detail/state/${org}/${repo}/${parseInt(
            id,
        )}?style=flat-square`
        data.alt = `Github ${type === 'issues' ? 'issue' : 'pull request'} at ${repo} by ${org}`
    }
    return data
}

class BadgedLink extends LitElement {
    render() {
        const meta = parseURL(this.href)
        if (meta.image === '')
            return html`
                <slot></slot>
            `
        return html`
            <a target="_blank" href="${meta.href}"><img src="${meta.image}" alt="${meta.alt}"/></a>
            <slot></slot>
        `
    }
    constructor() {
        super()
        this.href = ''
    }
    static get properties() {
        return {
            href: { type: String },
        }
    }
    static get styles() {
        return css`
            img {
                margin-bottom: -5px;
            }
        `
    }
}

customElements.define('i-a', BadgedLink, {})