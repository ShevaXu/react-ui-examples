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
  let style = Object.assign({}, defaultStyle, props.style,
    { opacity: props.opacity || defaultProps.opacity, zIndex: props.zIndex || defaultProps.zIndex })
  return (
  props.onClick
    ? <div style={style} onClick={props.onClick} onTouchTap={props.onClick}>
        {props.children}
      </div>
    : <div style={style}>
        {props.children}
      </div>
  )
}

Overlay.propTypes = {
  /**
   * The contents on top of the overlay
   */
  children: PropTypes.node,
  /**
   * Override the inline-styles of the root div element
   */
  style: PropTypes.object,
  /**
	 * The opacity of the overlay div, default 0.8, overwrites style
	 */
  opacity: PropTypes.number,
  /**
   * The z-index of the overlay div, default 1, overwrites style
   */
  zIndex: PropTypes.number,
  /**
   * The callback function when click/touch-tap on the overlay div if provided
   */
  onClick: PropTypes.func
}

export default Overlay
