import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './MainPage.css'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots =  robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    if(isPending) {
      return <h1 className='tc'>Loading</h1>
    } else {
      return  (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage
