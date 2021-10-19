import { toPng } from 'html-to-image';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/UI/Button/Button';
import { alpacaConfig } from '../config/alpacaConfig';
import { getImage } from '../Utils/getImage';
import { randomImage } from '../Utils/getRandomImage';
import Actions from './Actions/Actions';
import classes from './Alpaca.module.css';
import AlpacaArt from './AlpacaArt/AlpacaArt';
import Controls from './UI/Controls/Controls';

const Alpaca = (props) => {
	const btnRef = useRef(null);
	const [config, setConfig] = useState(alpacaConfig);
	const [bg, setBg] = useState(null);
	const [ears, setEars] = useState(null);
	const [eyes, setEyes] = useState(null);
	const [hair, setHair] = useState(null);
	const [leg, setLeg] = useState(null);
	const [mouth, setMouth] = useState(null);
	const [neck, setNeck] = useState(null);
	const [nose, setNose] = useState(null);
	const [accessories, setAccessories] = useState(null);
	const [feature, setFeature] = useState(config[0]);

	// console.log(config[0]);

	const changeImagehandler = (feature, attribute) => {
		const { directory: dir } = feature;
		const { fileName: bgImg } = attribute;

		const cloneConfig = [...config];

		const selectedFeatureIndex = cloneConfig.indexOf(feature);
		const selectedAttrIndex =
			cloneConfig[selectedFeatureIndex].items.indexOf(attribute);

		cloneConfig[selectedFeatureIndex].items.forEach(
			(attr) => (attr.selected = false)
		);
		cloneConfig[selectedFeatureIndex].items[selectedAttrIndex].selected = true;
		// console.log(cloneConfig);

		setConfig(cloneConfig);

		getImage(dir, bgImg, (image) => {
			switch (dir) {
				case 'backgrounds':
					setBg(image);
					break;
				case 'ears':
					setEars(image);
					break;
				case 'eyes':
					setEyes(image);
					break;
				case 'hair':
					setHair(image);
					break;
				case 'leg':
					setLeg(image);
					break;
				case 'mouth':
					setMouth(image);
					break;
				case 'neck':
					setNeck(image);
					break;
				case 'nose':
					setNose(image);
					break;
				case 'accessories':
					setAccessories(image);
					break;
				default:
					break;
			}
		});
	};

	const selectedFeatureHandler = (feature) => {
		const cloneConfig = [...config];

		const selectedIndex = cloneConfig.indexOf(feature);
		cloneConfig.forEach((ft) => (ft.selected = false));
		cloneConfig[selectedIndex].selected = true;
		setConfig(cloneConfig);
		setFeature(feature);
	};

	const downloadImageHandler = () => {
		const alpacaArt = document.getElementById('alpaca-art');

		toPng(alpacaArt, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'my-alpaca.png';
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const randomImageHandler = () => {
		const configClone = [...config];
		const itemId = configClone.map((cgf) => cgf.items.length);
		// console.log(itemId);
		const getRandomItemId = itemId.map((id) => randomImage(id));

		configClone.forEach((cfg) =>
			cfg.items.forEach((item) => (item.selected = false))
		);
		configClone.forEach(
			(cfg) => (cfg.items[getRandomItemId[cfg.id]].selected = true)
		);
		setConfig(configClone);

		configClone.map((cfg) => {
			const dir = cfg.directory;
			const fileName =
				cfg.items[getRandomItemId[cfg.id]].selected &&
				cfg.items[getRandomItemId[cfg.id]].fileName;
			getImage(dir, fileName, (image) => {
				switch (dir) {
					case 'backgrounds':
						setBg(image);
						break;
					case 'ears':
						setEars(image);
						break;
					case 'eyes':
						setEyes(image);
						break;
					case 'hair':
						setHair(image);
						break;
					case 'leg':
						setLeg(image);
						break;
					case 'mouth':
						setMouth(image);
						break;
					case 'neck':
						setNeck(image);
						break;
					case 'nose':
						setNose(image);
						break;
					case 'accessories':
						setAccessories(image);
						break;
					default:
						break;
				}
			});
		});
	};
	const alpacaAttributes = {
		bg,
		ears,
		eyes,
		hair,
		leg,
		mouth,
		neck,
		nose,
		accessories,
	};

	useEffect(() => {
		const renderAlpaca = () => {
			config.forEach((feature) => {
				const attribute = feature.items.filter(
					(item) => item.fileName === 'default'
				)[0];
				return changeImagehandler(feature, attribute);
			});
		};
		renderAlpaca();
	}, []);

	return (
		<div className={classes.alpaca}>
			<div id="alpaca-art">
				<AlpacaArt attr={alpacaAttributes} />
				<Actions
					onDownloadImage={downloadImageHandler}
					btnRef={btnRef}
					id={feature.id}
					onShowRandomImage={randomImageHandler}
				/>
			</div>

			<div>
				<h2>ACCESSORIZE THE ALPACA'S</h2>
				{config.map((item) => (
					<Controls
						item={item}
						key={item.id}
						onSelectedFeature={selectedFeatureHandler}
					/>
				))}

				<Button
					onChangeImage={changeImagehandler}
					attributes={feature}
					key={feature.id}
				/>
			</div>

			{/* <div className={classes.controls}> */}

			{/* </div> */}
		</div>
	);
};

export default Alpaca;
