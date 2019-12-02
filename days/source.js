"use strict";
/// <reference path="./global.d.ts" />
const { Typography } = MaterialUI;
const { Card, CardContent, CardActions, CardHeader, CardMedia } = MaterialUI;
const { Table, TableBody, TableCell, TableHead, TableRow } = MaterialUI;
const { styled } = MaterialUI;
//#region Styles
const Flex = styled('span')({ flex: 1 });
const Margin = styled('div')({ marginTop: 24 });
const theme = MaterialUI.createMuiTheme({
    palette: {
        type: 'dark',
        primary: MaterialUI.colors.teal,
    },
    typography: {
        fontFamily: `system-ui`,
    },
});
//#endregion
//#region Page
const Markdown = ({ children, ...props }) => {
    return typeof children === 'string' ? (React.createElement("span", Object.assign({}, props, { className: "null", dangerouslySetInnerHTML: { __html: marked(children) } }))) : (React.createElement("span", Object.assign({}, props, { children: children })));
};
class TheCard extends React.Component {
    render() {
        return (React.createElement(Card, null,
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "caption" },
                    React.createElement(Markdown, null, this.MakeCaption)),
                React.createElement(Typography, { variant: "h5", component: "h2" },
                    React.createElement(Markdown, null, this.MakeBody)),
                this.props.reference && (React.createElement(Typography, { align: "right" },
                    "\u2E3A",
                    React.createElement(Markdown, { style: { marginLeft: 6 } }, this.props.reference)))),
            this.MakeProgress));
    }
    get MakeProgress() {
        if (!this.props.progress)
            return null;
        const p = this.props.progress;
        return React.createElement(MaterialUI.LinearProgress, { variant: "determinate", value: (p.current / (p.max || 100)) * 100 });
    }
    get MakeCaption() {
        const progress = this.props.progress;
        const caption = this.props.captionTitle;
        const body = this.props.content;
        const MakeProgressText = (x) => {
            if (!x)
                return '';
            if (!x.max)
                return x.current + ' %';
            return `${x.current} of ${x.max}`;
        };
        if (!body) {
            return MakeProgressText(progress);
        }
        else {
            if (caption)
                return caption + (progress ? ' ⸺ ' + MakeProgressText(progress) : '');
            else
                return MakeProgressText(progress);
        }
    }
    get MakeBody() {
        const child = this.props.content || this.props.children || this.props.captionTitle;
        if (!child)
            return null;
        if (typeof child === 'string') {
            const result = [];
            for (const t of child.split('\n')) {
                result.push(t, React.createElement("br", { key: t }));
            }
            return result;
        }
        if (Array.isArray(child)) {
            // List
            return null;
        }
        if (((x) => x.head && x.body)(child)) {
            // Table
            const { head, body } = child;
            return (React.createElement(Table, null,
                React.createElement(TableHead, null,
                    React.createElement(TableRow, null, head.map((x, i) => (React.createElement(TableCell, { key: i },
                        React.createElement(Markdown, null, x)))))),
                React.createElement(TableBody, null, body.map((line, n) => (React.createElement(TableRow, { key: n }, line.map((row, j) => (React.createElement(TableCell, { align: typeof row === 'number' ? 'right' : 'left', key: j },
                    React.createElement(Markdown, null, row))))))))));
        }
        return child;
    }
}
class Page extends React.Component {
    get MakeTitle() {
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement(Typography, { variant: "h4" }, Data.title),
            React.createElement(Flex, null),
            React.createElement(Typography, { variant: "subtitle1", style: { alignSelf: 'flex-end' } },
                "\u2E3A",
                Data.weekMessage)));
    }
    get MakeFooter() {
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement(Flex, null),
            React.createElement(Typography, { variant: "subtitle1" },
                "\u2E3A",
                Data.motto)));
    }
    get Hitokoto() {
        let [text, by, link] = getHitokoto();
        text = text.replace(new RegExp(`
        `, 'g'), '\n');
        let using = false;
        const result = text.split('\n').map(x => {
            const text = x.match(/(.+) \/ (.+)/);
            // Firefox does not support named capture group yet.
            // const text = x.match(/(?<original>.+) \/ (?<translated>.+)/)
            if (text) {
                text.groups = { original: text[1], translated: text[2] };
                using = true;
                return (React.createElement(React.Fragment, null,
                    React.createElement("ruby", null,
                        React.createElement("span", { lang: "jp" }, text.groups.original),
                        React.createElement("rp", null, " / "),
                        React.createElement("rt", null,
                            React.createElement("div", null, text.groups.translated))),
                    React.createElement("br", null)));
            }
            return x;
        });
        if (!using)
            return React.createElement(TheCard, { captionTitle: "Hitokoto", content: text, reference: by });
        return (React.createElement(TheCard, { captionTitle: "Hitokoto", reference: by },
            React.createElement(React.Fragment, null, result)));
    }
    render() {
        return (React.createElement(MaterialUI.MuiThemeProvider, { theme: theme },
            this.MakeTitle,
            React.createElement(Margin, null),
            this.Hitokoto,
            React.createElement(Margin, null),
            Data.data.map((datum, i) => {
                return (React.createElement(React.Fragment, { key: i },
                    React.createElement(TheCard, { captionTitle: datum.title, reference: datum.reference, content: datum.content, progress: datum.progress }),
                    React.createElement(Margin, null)));
            }),
            this.MakeFooter));
    }
}
//#endregion
ReactDOM.render(React.createElement(Page, null), document.querySelector('.container'));
//# sourceMappingURL=source.js.map