import React from 'react';
import ReactDOM from 'react-dom';

import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import './styles.css';

const disneyData = [
	{ characterName: 'Mickey Mouse' },
	{ characterName: 'Minnie Mouse' },
	{ characterName: 'Donald Duck' },
	{ characterName: 'Goofy' },
	{ characterName: 'Pluto' }
];

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: disneyData,
			inputText: '',
			inputTextTwo: ''
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(event.target.name);
	};

	addCharacter = ev => {
		console.log('button clicked');
		ev.preventDefault();
		// create a new array with:
		// 1 - all the old data in the old array (Hint: use the spread operator)
		// 2 - the new character from this.state.inputText
		this.setState({
			characters: [
				...this.state.characters,
				{ characterName: this.state.inputText }
			],
			inputText: ''
		});
	};

	render() {
		return (
			<div className="App">
				<CharacterList characters={this.state.characters} />
				<CharacterForm
					addCharacter={this.addCharacter}
					inputText={this.state.inputText}
					inputTextTwo={this.state.inputTextTwo}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
