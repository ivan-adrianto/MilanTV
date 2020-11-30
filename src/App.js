import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Profile from './component/pages/profile/Profile'
import MovieDetails from './component/pages/movie-details/MovieDetails'
import DisplayBySearch from './component/pages/search/DisplayBySearch'
import Homepage from './component/pages/homepage/Homepage'




class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path="/profile/">
              <Profile />
            </Route>
            <Route path='/search/:keyword'>
              <DisplayBySearch />
            </Route>
            <Route exact path="/movie-details/:id">
              <MovieDetails />
            </Route>
          </Switch>

        </div>
      </HashRouter >

    )
  }
}

export default App