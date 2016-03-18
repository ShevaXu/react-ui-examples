import React from 'react'
import Overlay, { defaultProps } from '../src/components/overlay'
import { shallow } from 'enzyme'
import assert from 'assert'

describe('<Overlay />', () => {
  it('renders with default props', () => {
    const wrapper = shallow(
      <Overlay />
    )
    assert.strictEqual(wrapper.prop('style').opacity, defaultProps.opacity, 'opacity should be ' + defaultProps.opacity)
    assert.strictEqual(wrapper.prop('style').zIndex, defaultProps.zIndex, 'zIndex should be ' + defaultProps.zIndex)
  })
  it('renders with overwritten styles', () => {
    const wrapper = shallow(
      <Overlay opacity={0.5} zIndex={10} />
    )
    assert.strictEqual(wrapper.prop('style').opacity, 0.5, 'opacity should be 0.5')
    assert.strictEqual(wrapper.prop('style').zIndex, 10, 'zIndex should be 10')
  })
})
