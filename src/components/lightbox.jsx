import React, { PropTypes } from 'react'
import Overlay from './overlay'

const defaultStyle = {
  img: {
    cursor: 'zoom-in'
  },
  overlay: {
    display: 'flex'
  },
  prompt: {
    margin: 'auto',
    maxWidth: '80vw',
    maxHeight: '80vh',
    cursor: 'zoom-out'
  }
}

const Lightbox = React.createClass({
  propTypes: {
    style: PropTypes.object,
    opacity: PropTypes.number,
    zIndex: PropTypes.number,
    src: PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      zIndex: 1000,
      opacity: 0.95
    }
  },
  getInitialState: function () {
    return {
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
         <img src={this.props.src} onClick={this.handleClose} style={defaultStyle.prompt} />
       </Overlay>}
    </div>
    )
  }
})

Lightbox.propTypes = {
  opacify: PropTypes.number
}

export default Lightbox
