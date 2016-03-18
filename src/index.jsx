import './css/roboto.css'
import './css/main.css'

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Material-UI requires this before React V1.0 for onTouchTap
injectTapEventPlugin()

render(
  <div>Hello World</div>,
  document.getElementById('root')
)
