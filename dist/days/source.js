const { styled, Box, makeStyles, createStyles, colors, createMuiTheme, ListItem } = __UMDBindCheck(globalThis["MaterialUI"], ["styled", "Box", "makeStyles", "createStyles", "colors", "createMuiTheme", "ListItem"], "@material-ui/core", "globalThis.MaterialUI", true);
const { MuiThemeProvider, useMediaQuery, Card, CardContent, Typography, LinearProgress } = __UMDBindCheck(globalThis["MaterialUI"], ["MuiThemeProvider", "useMediaQuery", "Card", "CardContent", "Typography", "LinearProgress"], "@material-ui/core", "globalThis.MaterialUI", true);
const { Table, TableHead, TableRow, TableCell, TableBody, ListItemText, Divider, List } = __UMDBindCheck(globalThis["MaterialUI"], ["Table", "TableHead", "TableRow", "TableCell", "TableBody", "ListItemText", "Divider", "List"], "@material-ui/core", "globalThis.MaterialUI", true);
const React = __UMDBindCheck(globalThis["React"], [], "react", "globalThis.React", true);
const ReactDOM = __UMDBindCheck(globalThis["ReactDOM"], [], "react-dom", "globalThis.ReactDOM", true);
// @ts-ignore wrong typing. { Remarkable } is a private symbol.
import { Remarkable as RemarkableConstructor } from "https://cdn.pika.dev/remarkable@2.0.1";
import Data from "./data.js";
const render = new RemarkableConstructor({ breaks: true, html: true });
export default function (hitokotoProvider) {
    ReactDOM.render(React.createElement(Page, { data: Data, getHitokoto: hitokotoProvider }), document.querySelector('.container'));
}
//#region Styles
const Flex = styled('span')({ flex: 1 });
const Section = styled(Box)({ marginTop: 24 });
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: colors.teal,
    },
    typography: {
        fontFamily: `system-ui`,
    },
});
const useStyles = makeStyles((theme) => createStyles({
    listRoot: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    titleCaption: {
        alignSelf: 'flex-end',
        marginLeft: '0.5em',
    },
    titleName: { minWidth: '4em' },
    enhancedCardRef: { marginLeft: 6 },
}));
//#endregion
function Page(props) {
    const { data } = props;
    return (React.createElement(MuiThemeProvider, { theme: theme },
        React.createElement(Title, { title: data.title, caption: data.weekMessage }),
        React.createElement(Hitokoto, { hitokoto: props.getHitokoto() }),
        data.data.map((datum, i) => (React.createElement(EnhancedCard, { captionTitle: datum.title, reference: datum.reference, content: datum.content, progress: datum.progress }))),
        React.createElement(Footer, { caption: data.motto })));
}
// basic components
const Markdown = ({ children, ...props }) => {
    return typeof children === 'string' ? (React.createElement("span", { dangerouslySetInnerHTML: { __html: render.renderInline(children) } })) : (React.createElement("span", Object.assign({}, props, { children: children })));
};
function EnhancedCard(props) {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 700px)');
    return (React.createElement(Section, null,
        React.createElement(Card, null,
            React.createElement(CardContent, null,
                React.createElement(Typography, { variant: "caption" },
                    React.createElement(Markdown, null, getCaption())),
                React.createElement(Typography, { variant: "h5", component: "h2" },
                    React.createElement(Markdown, null, getBody())),
                props.reference && (React.createElement(Typography, { align: "right" },
                    "\u2E3A",
                    React.createElement(Markdown, { className: classes.enhancedCardRef }, props.reference)))),
            getProgress())));
    function getCaption() {
        const progress = props.progress;
        const caption = props.captionTitle;
        const body = props.content;
        const getProgressText = (x) => {
            if (!x)
                return '';
            if (!x.max)
                return x.current + ' %';
            return `${x.current} of ${x.max}`;
        };
        if (!body) {
            return getProgressText(progress);
        }
        else {
            if (caption)
                return caption + (progress ? ' ⸺ ' + getProgressText(progress) : '');
            else
                return getProgressText(progress);
        }
    }
    function getProgress() {
        if (!props.progress)
            return null;
        const p = props.progress;
        return React.createElement(LinearProgress, { variant: "determinate", value: (p.current / (p.max || 100)) * 100 });
    }
    function getBody() {
        const child = props.content || props.children || props.captionTitle;
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
            function Desktop() {
                return (React.createElement(Table, null,
                    React.createElement(TableHead, null,
                        React.createElement(TableRow, null, head.map((x, i) => (React.createElement(TableCell, { key: i },
                            React.createElement(Markdown, null, x)))))),
                    React.createElement(TableBody, null, body.map((line, n) => (React.createElement(TableRow, { key: n }, line.map((row, j) => (React.createElement(TableCell, { align: typeof row === 'number' ? 'right' : 'left', key: j },
                        React.createElement(Markdown, null, row))))))))));
            }
            function Mobile() {
                return (React.createElement(List, { className: classes.listRoot }, body.map(([title, secondary, date], n) => (React.createElement(React.Fragment, null,
                    React.createElement(ListItem, { alignItems: "flex-start" },
                        React.createElement(ListItemText, { primary: React.createElement(Markdown, null, title), secondary: React.createElement(React.Fragment, null,
                                React.createElement(Typography, { component: "span", variant: "body2", className: classes.inline, color: "textPrimary" },
                                    React.createElement(Markdown, null, secondary)),
                                React.createElement(Markdown, null,
                                    " ",
                                    ` - ${date}`)) })),
                    React.createElement(Divider, { variant: "middle", component: "li" }))))));
            }
            return isMobile ? Mobile() : Desktop();
        }
        return child;
    }
}
function Title(props) {
    const classes = useStyles();
    return (React.createElement(Section, { display: "flex" },
        React.createElement(Typography, { className: classes.titleName, variant: "h4" }, props.title),
        React.createElement(Flex, null),
        React.createElement(Typography, { variant: "subtitle1", className: classes.titleCaption },
            "\u2E3A",
            props.caption)));
}
function Footer(props) {
    return (React.createElement(Section, { display: "flex" },
        React.createElement(Flex, null),
        React.createElement(Typography, { variant: "subtitle1" },
            "\u2E3A",
            props.caption)));
}
function Hitokoto(props) {
    let [text, by, link] = props.hitokoto;
    text = text.replace(new RegExp(/\s+\\n/g), '\n');
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
        return React.createElement(EnhancedCard, { captionTitle: "Hitokoto", content: text, reference: by });
    return (React.createElement(EnhancedCard, { captionTitle: "Hitokoto", reference: by },
        React.createElement(React.Fragment, null, result)));
}
import { __UMDBindCheck as __UMDBindCheck } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@2.1.2/es/ttsclib.min.js";
//# sourceMappingURL=source.js.map