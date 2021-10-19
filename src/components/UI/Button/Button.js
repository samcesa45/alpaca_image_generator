import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	return (
		<div className={classes.controls}>
			<h3>{props.attributes.label}</h3>
			{props.attributes.items.map((item) => (
				<button
					className={`${item.selected ? classes.selected : classes.button}`}
					key={item.id}
					onClick={() => props.onChangeImage(props.attributes, item)}>
					{item.label}
				</button>
			))}
		</div>
	);
};

export default Button;
