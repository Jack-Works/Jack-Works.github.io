"use strict";
/// <reference path="./global.d.ts" />
const { Typography } = Material;
const { IconButton, Icon } = Material;
const { Card, CardContent, CardActions, CardHeader, CardMedia } = Material;
const { Table, TableBody, TableCell, TableHead, TableRow } = Material;
//#region Styles
const Flex = () => React.createElement("span", { style: { flex: 1 } });
const Magrin = () => React.createElement("div", { style: { marginTop: 24 } });
const theme = Material.createMuiTheme({
    palette: {
        type: 'dark',
        primary: Material.colors.teal,
    },
    typography: {
        fontFamily: `'Noto Sans CJK SC Light', 'Microsoft Yahei Light', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
});
//#endregion
//#region Page
class Markdown extends React.Component {
    render() {
        return typeof this.props.children === 'string' ? (React.createElement("span", { className: "null", dangerouslySetInnerHTML: { __html: marked(this.props.children) } })) : (this.props.children);
    }
}
class TheCard extends React.Component {
    render() {
        return (React.createElement(Card, { style: { flex: 1 } },
            React.createElement(CardContent, null,
                React.createElement(Typography, { type: "caption" },
                    React.createElement(Markdown, null, this.MakeCaption)),
                React.createElement(Typography, { type: "headline", component: "h2" },
                    React.createElement(Markdown, null, this.MakeBody)),
                this.props.reference && (React.createElement(Typography, { align: "right" },
                    "\u2014\u2014",
                    React.createElement(Markdown, null, this.props.reference)))),
            this.MakeProgress));
    }
    get MakeProgress() {
        if (!this.props.progress)
            return null;
        const p = this.props.progress;
        return React.createElement(Material.LinearProgress, { mode: "determinate", value: p.current / (p.max || 100) * 100 });
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
                return caption + (progress ? ' - ' + MakeProgressText(progress) : '');
            else
                return MakeProgressText(progress);
        }
    }
    get MakeBody() {
        const child = this.props.content || this.props.children || this.props.captionTitle;
        if (!child)
            return null;
        if (typeof child === 'string')
            return child;
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
                React.createElement(TableBody, null, body.map((line, n) => (React.createElement(TableRow, { key: n }, line.map((row, j) => (React.createElement(TableCell, { key: j, numeric: typeof row === 'number' },
                    React.createElement(Markdown, null, row))))))))));
        }
        return child;
    }
}
class Page extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { playing: false };
    }
    get MakeTitle() {
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement(Typography, { type: "display2" }, Data.title),
            React.createElement(Flex, null),
            React.createElement(Typography, { type: "subheading", style: { alignSelf: 'flex-end' } },
                "\u2014\u2014",
                Data.weekMessage)));
    }
    get MakeFooter() {
        return (React.createElement("div", { style: { display: 'flex' } },
            React.createElement(Flex, null),
            React.createElement(Typography, { type: "subheading" },
                "\u2014\u2014",
                Data.motto)));
    }
    get Hitokoto() {
        const hitokoto = getHitokoto();
        return React.createElement(TheCard, { captionTitle: "Hitokoto", content: hitokoto[0], reference: hitokoto[1] });
    }
    get Media() {
        return null;
    }
    render() {
        return (React.createElement(Material.MuiThemeProvider, { theme: theme },
            this.MakeTitle,
            React.createElement(Magrin, null),
            React.createElement("div", { style: { display: 'flex' } },
                this.Hitokoto,
                this.Media),
            React.createElement(Magrin, null),
            Data.data.map((datum, i) => {
                return (React.createElement(React.Fragment, { key: i },
                    React.createElement(TheCard, { captionTitle: datum.title, reference: datum.reference, content: datum.content, progress: datum.progress }),
                    React.createElement(Magrin, null)));
            }),
            this.MakeFooter));
    }
}
//#endregion
ReactDOM.render(React.createElement(Page, null), document.querySelector('.container'));
//# sourceMappingURL=source.js.map