import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JSONDATA from './city.json'

class Activities extends Component{
	render(){
		return(
			<div className="activities">
					<div className="item">
						{
							JSONDATA.cities.map(city =>{
								return(
									<div key={city.id} className="city-item">
										<p>{ city.name }</p>
									</div>
								)
							})
						}
					</div>
			</div>
		)
	}
}

export default Activities;
