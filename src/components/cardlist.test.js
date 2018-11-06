import { shallow } from 'enzyme';
import React from 'react'
import CardList from './CardList';

describe('Cardlist', () => {
  it('Snapshot test of CardList element', () => {
      const mockRobots = [{
        id:1,
        name:"Michal",
        username:"michels",
        email:"Mich@el.com"
      }]
      expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
    }
  )
})


