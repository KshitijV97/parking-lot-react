import { getRandomElement } from '../helpers/getRandomElement';

/**
 *
 * @param {Array} availableEntrances Array of all available entrances
 * @returns {String} Random entrance from all available entrances
 */
export const getEntrance = (availableEntrances) => {
	return getRandomElement(availableEntrances);
};
