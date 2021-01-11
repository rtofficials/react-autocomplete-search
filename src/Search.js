import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'
import CityListView from './CityListView'


const animatedComponent = makeAnimated()

class Search extends PureComponent{
	state = { selectedCities : [], selectedItem : [] }

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

	onClick = item => {
		this.state.selectedItem.push(item.name);
		<CityListView selectedItem = {this.selectedItem} />
	}

	render(){
		return(
			<div className="search">
				<AsyncSelect isMulti id='search-bar'
					components={animatedComponent}
					value={this.state.selectedCities}
					onChange={this.onChange}
					cacheOptions
        			defaultOptions
					placeholder={'Search your city . .  .'}
					loadOptions={this.loadOptions}
					onClick={this.onClick}
				/>
			</div>
		)
	}
}

export default Search

