export const getImage = (
	directory = 'backgrounds',
	img = 'default',
	callback
) => {
	import(`../assets/images/alpaca/${directory}/${img}.png`).then((image) => {
		callback(image.default);
	});
};
