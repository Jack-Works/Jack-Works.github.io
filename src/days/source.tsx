import { Theme, styled, Box, makeStyles, createStyles, colors, createMuiTheme, ListItem } from '@material-ui/core'
import { MuiThemeProvider, useMediaQuery, Card, CardContent, Typography, LinearProgress } from '@material-ui/core'
import { Table, TableRow, TableCell, TableBody, ListItemText, Divider, List } from '@material-ui/core'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Remarkable } from 'remarkable'
import { IData, ICard, ITable } from './type.js'
import Data from './data'
const render = new Remarkable({ breaks: true, html: true })
export default function (hitokotoProvider: () => string[]) {
    ReactDOM.render(<Page data={Data} getHitokoto={hitokotoProvider} />, document.querySelector('.container'))
}
//#region Styles

const Flex = styled('span')({ flex: 1 })
const Section = styled(Box)({ marginTop: 24 })
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: colors.teal,
    },
    typography: {
        fontFamily: `system-ui`,
    },
})
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
)

//#endregion

function Page(props: { data: IData; getHitokoto(): string[] }) {
    const { data } = props
    return (
        <MuiThemeProvider theme={theme}>
            <Title title={data.title} caption={data.weekMessage} />
            <Hitokoto hitokoto={props.getHitokoto()} />
            {data.data.map((datum, i) => (
                <EnhancedCard
                    captionTitle={datum.title}
                    reference={datum.reference}
                    content={datum.content}
                    progress={datum.progress}
                />
            ))}
            <Footer caption={data.motto} />
        </MuiThemeProvider>
    )
}

// basic components

function Markdown({ children, ...props }: React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLSpanElement>>) {
    return typeof children === 'string' ? (
        <span dangerouslySetInnerHTML={{ __html: render.renderInline(children) }}></span>
    ) : (
        <span {...props} children={children} />
    )
}
interface EnhancedCardProps {
    captionTitle?: string
    reference?: string
    progress?: {
        max?: number
        current: number
    }
    content?: ICard['content']
}
function EnhancedCard(props: React.PropsWithChildren<EnhancedCardProps>) {
    const classes = useStyles()
    const isMobile = useMediaQuery('(max-width: 700px)')
    return (
        <Section>
            <Card>
                <CardContent>
                    <Typography variant="caption">
                        <Markdown>{getCaption()}</Markdown>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <Markdown>{getBody()}</Markdown>
                    </Typography>
                    {props.reference && (
                        <Typography align="right">
                            ⸺<Markdown className={classes.enhancedCardRef}>{props.reference}</Markdown>
                        </Typography>
                    )}
                </CardContent>
                {getProgress()}
            </Card>
        </Section>
    )
    function getCaption() {
        const progress = props.progress
        const caption = props.captionTitle
        const body = props.content
        const getProgressText = (x: typeof progress) => {
            if (!x) return ''
            if (!x.max) return x.current + ' %'
            return `${x.current} of ${x.max}`
        }
        if (!body) {
            return getProgressText(progress)
        } else {
            if (caption) return caption + (progress ? ' ⸺ ' + getProgressText(progress) : '')
            else return getProgressText(progress)
        }
    }
    function getProgress() {
        if (!props.progress) return null
        const p = props.progress
        return <LinearProgress variant="determinate" value={(p.current / (p.max || 100)) * 100} />
    }
    function getBody() {
        const child = props.content || props.children || props.captionTitle
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
        if ((((x: any) => x.body) as (x: any) => x is ITable)(child)) {
            // Table
            const { body } = child
            function Desktop() {
                return (
                    <Table>
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
            function Mobile() {
                return (
                    <List className={classes.listRoot}>
                        {body.map(([title, secondary, date], n) => (
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={<Markdown>{title}</Markdown>}
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    <Markdown>{secondary}</Markdown>
                                                </Typography>
                                                <Markdown> {` - ${date}`}</Markdown>
                                            </>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="middle" component="li" />
                            </>
                        ))}
                    </List>
                )
            }
            return isMobile ? Mobile() : Desktop()
        }
        return child
    }
}
function Title(props: { title: string; caption: string }) {
    const classes = useStyles()
    return (
        <Section display="flex">
            <Typography className={classes.titleName} variant="h4">
                {props.title}
            </Typography>
            <Flex />
            <Typography variant="subtitle1" className={classes.titleCaption}>
                ⸺{props.caption}
            </Typography>
        </Section>
    )
}
function Footer(props: { caption: string }) {
    return (
        <Section display="flex">
            <Flex />
            <Typography variant="subtitle1">⸺{props.caption}</Typography>
        </Section>
    )
}
function Hitokoto(props: { hitokoto: string[] }) {
    let [text, by, link] = props.hitokoto
    text = text.replace(new RegExp(/\s+\\n/g), '\n')
    let using = false
    const result = text.split('\n').map((x) => {
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
    if (!using) return <EnhancedCard captionTitle="Hitokoto" content={text} reference={by} />
    return (
        <EnhancedCard captionTitle="Hitokoto" reference={by}>
            <>{result}</>
        </EnhancedCard>
    )
}
//#endregion
