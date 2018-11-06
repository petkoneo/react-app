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

  filterRobots = robots => {
    return robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
  }
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    if(isPending) {
      return <h1 className='tc'>Loading</h1>
    } else {
      return  (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage
