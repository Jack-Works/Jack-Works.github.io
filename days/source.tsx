/// <reference path="./global.d.ts" />
declare const MaterialUI: typeof window.MaterialUI
declare const Data: IData
declare const hitokoto: string[][]
declare function getHitokoto(): string[]
const { Typography } = MaterialUI
const { Card, CardContent, CardActions, CardHeader, CardMedia } = MaterialUI
const { Table, TableBody, TableCell, TableHead, TableRow } = MaterialUI
const { styled } = MaterialUI

//#region Styles

const Flex = styled('span')({ flex: 1 })
const Margin = styled('div')({ marginTop: 24 })
const theme = MaterialUI.createMuiTheme({
    palette: {
        type: 'dark',
        primary: MaterialUI.colors.teal,
    },
    typography: {
        fontFamily: `system-ui`,
    },
})

//#endregion

//#region Page
const Markdown: React.SFC<React.HtmlHTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
    return typeof children === 'string' ? (
        <span {...props} className="null" dangerouslySetInnerHTML={{ __html: marked(children) }} />
    ) : (
        <span {...props} children={children} />
    )
}
class TheCard extends React.Component<{
    captionTitle?: string
    reference?: string
    progress?: {
        max?: number
        current: number
    }
    content?: ICard['content']
}> {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="caption">
                        <Markdown>{this.MakeCaption}</Markdown>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <Markdown>{this.MakeBody}</Markdown>
                    </Typography>
                    {this.props.reference && (
                        <Typography align="right">
                            ⸺<Markdown style={{ marginLeft: 6 }}>{this.props.reference}</Markdown>
                        </Typography>
                    )}
                </CardContent>
                {this.MakeProgress}
            </Card>
        )
    }
    get MakeProgress() {
        if (!this.props.progress) return null
        const p = this.props.progress
        return <MaterialUI.LinearProgress variant="determinate" value={(p.current / (p.max || 100)) * 100} />
    }
    get MakeCaption() {
        const progress = this.props.progress
        const caption = this.props.captionTitle
        const body = this.props.content
        const MakeProgressText = (x: typeof progress) => {
            if (!x) return ''
            if (!x.max) return x.current + ' %'
            return `${x.current} of ${x.max}`
        }
        if (!body) {
            return MakeProgressText(progress)
        } else {
            if (caption) return caption + (progress ? ' ⸺ ' + MakeProgressText(progress) : '')
            else return MakeProgressText(progress)
        }
    }
    get MakeBody() {
        const child = this.props.content || this.props.children || this.props.captionTitle
        if (!child) return null
        if (typeof child === 'string') {
            const result = []
            for (const t of child.split('\n')) {
                result.push(t, <br key={t} />)
            }
            return result
        }
        if (Array.isArray(child)) {
            // List
            return null
        }
        if ((((x: any) => x.head && x.body) as (x: any) => x is ITable)(child)) {
            // Table
            const { head, body } = child
            return (
                <Table>
                    <TableHead>
                        <TableRow>
                            {head.map((x, i) => (
                                <TableCell key={i}>
                                    <Markdown>{x}</Markdown>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {body.map((line, n) => (
                            <TableRow key={n}>
                                {line.map((row, j) => (
                                    <TableCell align={typeof row === 'number' ? 'right' : 'left'} key={j}>
                                        <Markdown>{row}</Markdown>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        }
        return child
    }
}
class Page extends React.Component {
    get MakeTitle() {
        return (
            <div style={{ display: 'flex' }}>
                <Typography variant="h4">{Data.title}</Typography>
                <Flex />
                <Typography variant="subtitle1" style={{ alignSelf: 'flex-end' }}>
                    ⸺{Data.weekMessage}
                </Typography>
            </div>
        )
    }
    get MakeFooter() {
        return (
            <div style={{ display: 'flex' }}>
                <Flex />
                <Typography variant="subtitle1">⸺{Data.motto}</Typography>
            </div>
        )
    }
    get Hitokoto() {
        let [text, by, link] = getHitokoto()
        text = text.replace(
            new RegExp(
                `
        `,
                'g',
            ),
            '\n',
        )
        let using = false
        const result = text.split('\n').map(x => {
            const text = x.match(/(.+) \/ (.+)/)
            // Firefox does not support named capture group yet.
            // const text = x.match(/(?<original>.+) \/ (?<translated>.+)/)
            if (text) {
                text.groups = { original: text[1], translated: text[2] }
                using = true
                return (
                    <>
                        <ruby>
                            <span lang="jp">{text.groups!.original}</span>
                            <rp> / </rp>
                            <rt>
                                <div>{text.groups!.translated}</div>
                            </rt>
                        </ruby>
                        <br />
                    </>
                )
            }
            return x
        })
        if (!using) return <TheCard captionTitle="Hitokoto" content={text} reference={by} />
        return (
            <TheCard captionTitle="Hitokoto" reference={by}>
                <>{result}</>
            </TheCard>
        )
    }
    render() {
        return (
            <MaterialUI.MuiThemeProvider theme={theme}>
                {this.MakeTitle}
                <Margin />
                {this.Hitokoto}
                <Margin />
                {Data.data.map((datum, i) => {
                    return (
                        <React.Fragment key={i}>
                            <TheCard
                                captionTitle={datum.title}
                                reference={datum.reference}
                                content={datum.content}
                                progress={datum.progress}
                            />
                            <Margin />
                        </React.Fragment>
                    )
                })}
                {this.MakeFooter}
            </MaterialUI.MuiThemeProvider>
        )
    }
}

//#endregion

ReactDOM.render(<Page />, document.querySelector('.container'))
