import React from 'react'
import Overlay, { defaultProps } from '../src/components/overlay'
import { shallow } from 'enzyme'
import assert from 'assert'

describe('<Overlay />', () => {
  const testChildren = <div>
                         Hello World
                       </div>
  it('renders by default', () => {
    const wrapper = shallow(
      <Overlay />
    )
    assert.strictEqual(wrapper.prop('style').opacity, defaultProps.opacity, 'opacity should be ' + defaultProps.opacity)
    assert.strictEqual(wrapper.prop('style').zIndex, defaultProps.zIndex, 'zIndex should be ' + defaultProps.zIndex)
  })
  it('renders children with default props', () => {
    const wrapper = shallow(
      <Overlay>
        {testChildren}
      </Overlay>
    )
    assert.ok(wrapper.contains(testChildren), 'should contain the children')
    assert.strictEqual(wrapper.prop('style').opacity, defaultProps.opacity, 'opacity should be ' + defaultProps.opacity)
    assert.strictEqual(wrapper.prop('style').zIndex, defaultProps.zIndex, 'zIndex should be ' + defaultProps.zIndex)
  })
  it('renders children with specific opacity and zIndex', () => {
    const wrapper = shallow(
      <Overlay opacity={0.5} zIndex={10}>
        {testChildren}
      </Overlay>
    )
    assert.ok(wrapper.contains(testChildren), 'should contain the children')
    assert.strictEqual(wrapper.prop('style').opacity, 0.5, 'opacity should be 0.5')
    assert.strictEqual(wrapper.prop('style').zIndex, 10, 'zIndex should be 10')
  })
  it('renders with specific style (but no opacity nor zIndex)', () => {
    const wrapper = shallow(
      <Overlay style={{ display: 'flex', opacity: 0.5, zIndex: 10 }} />
    )
    assert.strictEqual(wrapper.prop('style').display, 'flex', 'opacity should be flex')
    assert.strictEqual(wrapper.prop('style').opacity, defaultProps.opacity, 'opacity should be ' + defaultProps.opacity)
    assert.strictEqual(wrapper.prop('style').zIndex, defaultProps.zIndex, 'zIndex should be ' + defaultProps.zIndex)
  })
})
