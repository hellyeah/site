import highlight from 'highlight.js'
import chroma from 'chroma-js'

if (window.location.search == '?demo')
  window.location = 'https://www.youtube.com/watch?t=1&v=VNfkk6lH0gg'

if (window.location.search == '?slack')
  window.location = 'https://flint-slack.herokuapp.com/'

const router = Flint.router

const routes = {}
routes.home = '/'
routes.examples = '/examples'
routes.docs = '/docs'

const color = chroma || function(){}
color.brand = '#eb522d'
color.brand1 = '#E86C3D'
color.brand2 = '#DB415E'
color.green = '#259630'
color.blue = 'rgb(48, 111, 207)'
color.darkred = color(color.brand)//.darken(0.3)
color.bg = '#fff'
color.text = '#444'
color.strip = '#fff'

const font = {}
font.sansSerif = 'Open Sans, Helvetica, sans-serif'
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace'

const device = {}
device.small = '@media (max-width: 850px)'

const style = {}
style.link = {
  color: color.blue,
  cursor: 'pointer',
  textDecoration: 'none',
  borderBottom: '1px dotted #ddd',
  padding: 0,

  ':hover': { color: color.brand }
}
style.textGradient = {
  background: `-webkit-linear-gradient(left,
    ${color(color.brand1).darken(0.6)},
    ${color(color.brand2).darken(0.6)})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

const util = {}


view Main {
  let hidePass = false

  let passCorrect = () => {
    hidePass = true
    localStorage.setItem('authed', true)
  }

  let correct = window.location.search == '?yc'
             || localStorage.getItem('authed') === 'true'

  if (correct) passCorrect()

  <Password onShow={passCorrect} if={!hidePass} />
  <Home route={routes.home} />
  <Examples route={routes.examples} />
  <Docs route={routes.docs} />

  $ = {
    color: color.text,
    fontSize: 16,
    lineHeight: '1.8rem',
    fontFamily: font.sansSerif,
    overflow: 'hidden',
    background: color.bg,
    position: 'relative'
  }
}

view Password {
  let password = ''

  const checkPass = () => {
    console.log('checkin pass', password)
    if (password.toLowerCase() == 'love') ^onShow()
  }

  on('mount', () => {
    view.refs.input.focus()
  })

  <password>
    <input
      ref="input"
      onEnter={checkPass}
      sync={password} />

    <p>Curious? <a href="http://flint-slack.herokuapp.com">Say hi in Slack</a></p>
  </password>

  $password = {
    position: 'fixed',
    top: 0, right: 0,
    left: 0, bottom: 0,
    background: '#eee',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center'
  }

  $input = {
    padding: 20,
    background: '#fff',
    border: '1px solid #ddd',
    fontSize: 22,
    margin: [0, 'auto'],
    textAlign: 'center'
  }
}

// to keep isomorphism for now, should be handled by flint
if (typeof window != 'undefined') {
  util.docOffset = require('document-offset')
  util.scroll = require('scroll')
}

util.linkScroll = e => {
  const el = document.querySelector(e.currentTarget.getAttribute('href'))
  util.scroll.top(document.body, el.getBoundingClientRect().top - 50)
  e.preventDefault()
}

export default { style, font, routes, router, device, color, util, highlight }