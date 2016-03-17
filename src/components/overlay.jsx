import React, { PropTypes } from 'react'

const defaultStyle = {
  height: '100vh',
  width: '100vw',
  left: 0,
  top: 0,
  position: 'absolute',
  opacity: 0.8,
  backgroundColor: '#000'
}

const Overlay = (props) => {
  let style = props.opacity
    ? Object.assign({}, defaultStyle, { opacity: props.opacity })
    : defaultStyle
  return (
  props.onClick ? <div style={style} onClick={props.onClick} onTouchTap={props.onClick}></div> : <div style={style}></div>
  )
}

Overlay.propTypes = {
  opacity: PropTypes.number,
  onClick: PropTypes.func
}

export default Overlay
