import React, {Component} from 'react'
import Search from './Search'
import CityListView from './CityListView'
import Activities from './Activities'
import './App.css';

class App extends Component {
  render(){
      return (
        <div className="App">
          <Search />
          <div className="container">
          	<CityListView /><Activities />
          </div>
        </div>
    );
  }
}

export default App;
