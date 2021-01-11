import React, {Component} from 'react'
import Search from './Search'
import Activities from './Activities'
import CityListView from './CityListView'
import './App.css';


class App extends Component {
  render(){
      return (
        <div className="App">
    		<Search />
    		<div className="container">
          		<CityListView /> <Activities />
          	</div>
        </div>
    );
  }
}

export default App;
