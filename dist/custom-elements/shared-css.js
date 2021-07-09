import { css } from "https://cdn.skypack.dev/lit-element@2.5.1";
export const sharedBlockStyle = css `
    padding: 12px;
    margin-top: 0.5em;
    display: block;
    color: black;
    font-family: system-ui;
`;
export const deprecatedStyle = css `
    :host {
        border-left: 6px #e66465 solid;
        background: rgb(255, 203, 205);
        ${sharedBlockStyle}
    }
`;
export const recommendStyle = css `
    :host {
        border-left: 6px rgb(2, 184, 255) solid;
        background: rgb(0, 120, 167);
        ${sharedBlockStyle}
        color: white;
    }
`;
export const warningStyle = css `
    :host {
        border-left: 6px #f6b73c solid;
        background: #fff3d4;
        ${sharedBlockStyle};
    }
`;
//# sourceMappingURL=shared-css.js.map