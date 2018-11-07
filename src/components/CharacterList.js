import React, { Fragment } from 'react';

import Character from './Character';

const CharacterList = props => {
	return (
		<Fragment>
			<h1>Disney OGs:</h1>
			<ul>
				{props.characters.map(character => (
					<Character character={character} />
				))}
			</ul>
		</Fragment>
	);
};

export default CharacterList;
