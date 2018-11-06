import { shallow } from 'enzyme';
import React from 'react'
import Card from './Card';


it('Snapshot test of Card element', () => {
    expect(shallow(<Card />)).toMatchSnapshot()
  }
)

