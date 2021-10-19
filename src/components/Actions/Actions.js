import React from 'react';
import classes from './Actions.module.css';
const Actions = ({ btnRef, onDownloadImage, onShowRandomImage, id }) => {
	return (
		<div className={classes.actions}>
			<button onClick={() => onShowRandomImage(+id)}>Random</button>
			<button ref={btnRef} onClick={() => onDownloadImage()}>
				DownLoad
			</button>
		</div>
	);
};

export default Actions;
