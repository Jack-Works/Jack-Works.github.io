import { customElement, LitElement, html, property, css } from 'lit-element'

function parseURL(href: string) {
    const url = new URL(href, location.href)
    const data = {
        image: '',
        alt: '',
        href,
        hideSlot: false,
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
    } else if (href.startsWith(`https://www.npmjs.com/package/`) || href.startsWith(`https://npmjs.com/package/`)) {
        // https://www.npmjs.com/package/@types/matrix-js-sdk
        // https://www.npmjs.com/package/matrix-js-sdk
        let [, , scope, name] = url.pathname.split('/')
        const pkg = scope.startsWith('@') ? `${scope}/${name}` : scope
        data.image = `https://img.shields.io/npm/dm/${pkg}?label=${encodeURIComponent(pkg)}&style=flat-square`
        data.alt = `Package ${pkg} at npm`
        data.hideSlot = true
    }
    return data
}

@customElement('i-a')
export class BadgedLink extends LitElement {
    @property({ type: String }) href = ''
    render() {
        const meta = parseURL(this.href)
        if (meta.image === '') return html` <slot></slot> `
        return html`
            <a target="_blank" href="${meta.href}"><img src="${meta.image}" alt="${meta.alt}" /></a>
            <slot style="${meta.hideSlot ? 'display:none' : ''}"></slot>
        `
    }
    static get styles() {
        return css`
            img {
                margin-bottom: -5px;
            }
        `
    }
}
