import './css/roboto.css'
import './css/main.css'

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Lightbox from './components/lightbox'
import { flower } from './assets'

// Material-UI requires this before React V1.0 for onTouchTap
injectTapEventPlugin()

render(
  <Lightbox src={flower} style={{ width: 300 }} />,
  document.getElementById('root')
)
