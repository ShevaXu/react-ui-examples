import React from 'react'
import Lightbox, { defaultProps } from '../src/components/lightbox'
import Overlay from '../src/components/overlay'
import { shallow } from 'enzyme'
import assert from 'assert'
import { flower } from '../src/assets'

describe('<Lightbox />', () => {
  it('renders a div with a <img />', () => {
    const wrapper = shallow(
      <Lightbox src={flower} />
    )
    assert.ok(wrapper.is('div'))
    assert.strictEqual(wrapper.find('img').length, 1)
  })
  it('renders <img /> with overwritten style', () => {
    const wrapper = shallow(
      <Lightbox src={flower} style={{ width: 300 }} />
    )
    assert.strictEqual(wrapper.find('img').prop('style').width, 300, 'width should be 300')
  })
  it('hides <Overlay /> initially, and opens after click on <img />', () => {
    const wrapper = shallow(
      <Lightbox src={flower} />
    )
    assert.strictEqual(wrapper.find(Overlay).length, 0)
    wrapper.find('img').simulate('click')
    assert.strictEqual(wrapper.find(Overlay).length, 1)
  })
  it('renders two <img /> after clicking on one', () => {
    const wrapper = shallow(
      <Lightbox src={flower} />
    )
    assert.strictEqual(wrapper.find('img').length, 1)
    wrapper.find('img').simulate('click')
    assert.strictEqual(wrapper.find('img').length, 2)
  })
  it('passed default props to <Overlay />', () => {
    const wrapper = shallow(
      <Lightbox src={flower} />
    )
    wrapper.find('img').simulate('click')
    const overlay = wrapper.find(Overlay).get(0)
    assert.strictEqual(overlay.props.opacity, defaultProps.opacity, 'opacity should be ' + defaultProps.opacity)
    assert.strictEqual(overlay.props.zIndex, defaultProps.zIndex, 'zIndex should be ' + defaultProps.zIndex)
  })
  it('passed overwritten props to <Overlay />', () => {
    const wrapper = shallow(
      <Lightbox src={flower} opacity={0.99} zIndex={100} />
    )
    wrapper.find('img').simulate('click')
    const overlay = wrapper.find(Overlay).get(0)
    assert.strictEqual(overlay.props.opacity, 0.99, 'opacity should be 0.99')
    assert.strictEqual(overlay.props.zIndex, 100, 'zIndex should be 100')
  })
  it('clicking on <Overlay /> hides it again', () => {
    const wrapper = shallow(
      <Lightbox src={flower} />
    )
    wrapper.find('img').simulate('click')
    assert.strictEqual(wrapper.find(Overlay).length, 1)
    wrapper.find(Overlay).simulate('click')
    assert.strictEqual(wrapper.find(Overlay).length, 0)
  })
  it('clicking on the popup <img /> hides it again', () => {
    const wrapper = shallow(
      <Lightbox src={flower} />
    )
    wrapper.find('img').simulate('click')
    assert.strictEqual(wrapper.find(Overlay).length, 1)
    wrapper.find(Overlay).find('img').simulate('click')
    assert.strictEqual(wrapper.find(Overlay).length, 0)
  })
  it('renders caption', () => {
    const wrapper = shallow(
      <Lightbox src={flower} caption='Test caption' />
    )
    wrapper.find('img').simulate('click')
    assert.strictEqual(wrapper.find('h4').length, 1)
  })
})
