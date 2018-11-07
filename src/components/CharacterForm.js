import React from 'react';

const CharacterForm = props => {
	return (
		<div>
			<form onSubmit={props.addCharacter}>
				<input
					type="text"
					name="inputText"
					placeholder="add new character"
					value={props.inputText}
					onChange={props.handleChange}
				/>
				<input
					type="text"
					name="inputTextTwo"
					placeholder="Just here for looks"
					value={props.inputTextTwo}
					onChange={props.handleChange}
				/>
				<button type="submit">Add Character</button>
			</form>
		</div>
	);
};

export default CharacterForm;
