import { shallow } from 'enzyme';
import React from 'react'
import App from '../containers/App';

describe('App', () => {
  it('Snapshot test of App element', () => {
      const mockStore = [{
        robots: [],
        searchField: ''
      }]
      expect(shallow(<App store={mockStore} />)).toMatchSnapshot()
    }
  )
})


