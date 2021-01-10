import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'


const animatedComponent = makeAnimated()

class Search extends PureComponent{
	state = { selectedCities : [] }

	onChange = selectedCities => {
		this.setState({
			selectedCities : selectedCities || []
		})
	}

	loadOptions = async(inputText, callback) => {
		const response = await fetch(`http://localhost:3001/cities?name_like=${inputText}`);
		const json = await response.json();

		callback(json.map(
			city => ({
				label : city.name
			})
		))
	}

	render(){
		return(
			<div className="search">
				<AsyncSelect isMulti id='search-bar'
					components={animatedComponent}
					value={this.state.selectedCities}
					onChange={this.onChange}
					placeholder={'Search your city . .  .'}
					loadOptions={this.loadOptions}
				/>
			</div>
		)
	}
}

export default Search

