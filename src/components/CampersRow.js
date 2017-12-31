import React from 'react';

function CampersRow(props) {
	return (
		<tr>
			<td>{props.numb}</td>
			<td>{props.username}</td>
			<td>{props.recent}</td>
			<td>{props.alltime}</td>
		</tr>
	);
}

export default CampersRow;
