import React from 'react';
import classes from './AlpacaArt.module.css';
const AlpacaArt = (props) => {
	const { bg, ears, eyes, hair, leg, mouth, neck, nose, accessories } =
		props.attr;
	return (
		<div className={classes.container}>
			<img src={bg} alt="backgrounds" className={classes.background} />
			<img src={ears} alt="ears" className={classes.ears} />
			<img src={eyes} alt="eyes" className={classes.eyes} />
			<img src={hair} alt="hair" className={classes.hair} />
			<img src={leg} alt="leg" className={classes.leg} />
			<img src={mouth} alt="mouth" className={classes.mouth} />
			<img src={neck} alt="neck" className={classes.neck} />
			<img src={nose} alt="nose" className={classes.nose} />
			<img
				src={accessories}
				alt="accessories"
				className={classes.accessories}
			/>
		</div>
	);
};

export default AlpacaArt;
