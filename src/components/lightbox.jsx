import React, { PropTypes } from 'react'
import Overlay from './overlay'

const defaultStyle = {
  img: {
    cursor: 'zoom-in'
  },
  overlay: {
    display: 'flex'
  },
  box: {
    margin: 'auto'
  },
  popup: {
    cursor: 'zoom-out',
    // Viewport-percentage lengths
    maxWidth: '80vw',
    maxHeight: '80vh'
  },
  caption: {
    color: 'white',
    textAlign: 'center'
  }
}

const getDefaultProps = () => {
  return {
    zIndex: 1000,
    opacity: 0.95
  }
}

export const defaultProps = getDefaultProps()

const Lightbox = React.createClass({
  propTypes: {
    /**
     * Override the inline-styles of the click-able img element
     */
    style: PropTypes.object,
    /**
  	 * The opacity of the overlay, default 0.95
  	 */
    opacity: PropTypes.number,
    /**
  	 * The z-index of the overlay, default 1000
  	 */
    zIndex: PropTypes.number,
    /**
  	 * The source of <img />
  	 */
    src: PropTypes.string.isRequired,
    /**
  	 * Optional caption shown under the image (in white)
  	 */
    caption: PropTypes.string
  },
  getDefaultProps: getDefaultProps,
  getInitialState: function () {
    return {
      /**
       * Controls if the overlay is shown
       */
      open: false
    }
  },
  handleOpen: function () {
    this.setState({ open: true })
  },
  handleClose: function () {
    this.setState({ open: false })
  },
  handleClickOverlay: function () {
    this.handleClose()
  },
  render: function () {
    let imgStyle = Object.assign({}, defaultStyle.img, this.props.style)
    return (
    <div>
      <img src={this.props.src} onClick={this.handleOpen} style={imgStyle} />
      {this.state.open &&
       <Overlay
         onClick={this.handleClickOverlay}
         style={defaultStyle.overlay}
         opacity={this.props.opacity}
         zIndex={this.props.zIndex}>
         <div style={defaultStyle.box}>
           <img src={this.props.src} onClick={this.handleClose} style={defaultStyle.popup} />
           {this.props.caption && <h4 style={defaultStyle.caption}>{this.props.caption}</h4>}
         </div>
       </Overlay>}
    </div>
    )
  }
})

export default Lightbox
