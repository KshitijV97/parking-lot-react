import { getRandomElement } from '../helpers/getRandomElement';
/**
 *
 * @param {Array} availableColors Array of available colors
 * @returns {String} Random color from array of colors
 */
export const getColor = (availableColors) => {
	return getRandomElement(availableColors);
};
