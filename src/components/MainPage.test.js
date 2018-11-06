import { shallow } from 'enzyme';
import React from 'react'
import MainPage from './MainPage';


describe('MainPage', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
  })


  it('renders MainPage', () => {
      expect(wrapper).toMatchSnapshot();
    }
  )

  it('filters Robots correctly', () => {
      expect(wrapper.instance().filterRobots([])).toEqual([]);
    }
  )
})


