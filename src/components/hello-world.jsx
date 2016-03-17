import React, { PropTypes } from 'react'
import Paper from 'material-ui/lib/paper'

const defaultStyle = {
  margin: 'auto',
  marginTop: '5em',
  padding: '3em',
  width: '30%'
}

const HelloWorld = (props) => {
  let style = props.style
    ? Object.assign({}, defaultStyle, props.style)
    : defaultStyle
  return (
  <Paper style={style}>
    <h1>Hello World</h1>
  </Paper>
  )
}

HelloWorld.propTypes = {
  style: PropTypes.object
}

export default HelloWorld
