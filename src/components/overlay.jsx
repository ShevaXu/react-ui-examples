import React, { PropTypes } from 'react'

const defaultStyle = {
  height: '100vh',
  width: '100vw',
  left: 0,
  top: 0,
  position: 'fixed',
  backgroundColor: '#000'
}

export const defaultProps = {
  opacity: 0.8,
  zIndex: 1
}

const Overlay = (props) => {
  let style = Object.assign({}, defaultStyle,
    { opacity: props.opacity || defaultProps.opacity, zIndex: props.zIndex || defaultProps.zIndex })
  return (
  props.onClick ? <div style={style} onClick={props.onClick} onTouchTap={props.onClick}></div> : <div style={style}></div>
  )
}

Overlay.propTypes = {
  /**
	 * The opacity of the overlay div, default 0.8
	 */
  opacity: PropTypes.number,
  /**
   * The z-index of the overlay div, default 1
   */
  zIndex: PropTypes.number,
  /**
   * The callback function when click/touch-tap on the overlay div if provided
   */
  onClick: PropTypes.func
}

export default Overlay
