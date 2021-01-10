import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import city from './city.json'

class Activities extends Component{
	render(){
		return(
			<div className="activities">
				{
					city.map((key, index) => {
						return (
							<div>
								<p>{key.name}</p>
							</div>
						)
					})
				}
			}</div>
		)
	}
}

export default Activities
