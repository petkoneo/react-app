import { shallow } from 'enzyme';
import React from 'react'
import Card from './Card';

it('expects to render the Card component',() => {
    expect(shallow(<Card />).length).toEqual(1)
  }
)
