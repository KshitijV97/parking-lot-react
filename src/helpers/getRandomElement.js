/**
 * @param {Array} arr - Array from which you have to randomly select one element
 * @returns - Random element from Array
 * */
export const getRandomElement = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};
