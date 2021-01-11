import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JSONDATA from './city.json'

const Activities = () => {
	return(
		<div className="outer-container">
			<div className="list-block">
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


export default Activities;