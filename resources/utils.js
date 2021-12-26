// @ts-check
/// <reference path="./global.d.ts" />
/**
 * @param {TemplateStringsArray} main
 * @param {...string} rest
 */
export function css(main, ...rest) {
    const cssText = String.raw(main, ...rest)
    /** @type {CSSStyleSheet} */ let sheet
    return {
        /**
         * Adopt CSS to a document or a ShadowRoot
         * @param {Document | ShadowRoot} target
         */
        adopt(target = document) {
            if (target.adoptedStyleSheets) {
                if (!sheet) {
                    sheet = new CSSStyleSheet()
                    sheet.replace(cssText)
                }
                target.adoptedStyleSheets = target.adoptedStyleSheets.concat(sheet)
            } else {
                const d = target.ownerDocument || target
                const sheet = d.createElement('style')
                sheet.appendChild(d.createTextNode(cssText))

                const to = 'head' in target ? target.head : target
                if (!to) return console.warn(target, 'does not have an insertion point.')
                to.insertBefore(sheet, null)
            }
        },
    }
}

const parser = new DOMParser()
/**
 * @param {TemplateStringsArray} main
 * @param {...string} rest
 */
export function html(main, ...rest) {
    const dom = parser.parseFromString(String.raw(main, ...rest), 'text/html').body

    return {
        /** @param {Node} node */
        adopt(node) {
            const frag = (node.ownerDocument || document).createDocumentFragment()
            dom.childNodes.forEach((node) => frag.appendChild(node.cloneNode(true)))
            node.appendChild(frag)
        },
    }
}
