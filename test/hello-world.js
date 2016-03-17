import React from 'react'
import HelloWorld from '../src/components/hello-world'
import { shallow } from 'enzyme'
import assert from 'assert'

describe('<HelloWorld />', () => {
  it('Has one H1', () => {
    const wrapper = shallow(<HelloWorld />)
    assert.equal(wrapper.find('h1').length, 1)
  })
  it('Contains `Hello World`', () => {
    const wrapper = shallow(<HelloWorld />)
    assert.ok(wrapper.contains('Hello World'))
  })
})
