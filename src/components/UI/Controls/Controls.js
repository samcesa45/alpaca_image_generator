import React from 'react';
import classes from './Controls.module.css';
const Controls = (props) => {
	return (
		<button
			className={`${props.item.selected ? classes.selected : classes.controls}`}
			key={props.id}
			id={props.item}
			onClick={() => props.onSelectedFeature(props.item)}>
			{props.item.label}
		</button>
	);
};

export default Controls;
