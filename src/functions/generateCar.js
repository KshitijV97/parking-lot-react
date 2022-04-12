import { ENTRANCES } from '../constants/entrances';
import { COLORS } from '../constants/colors';

import { getEntrance } from './getEntrance';
import { getColor } from './getColor';
import { getRegistrationNumber } from './getRegistrationNumber';

/**
 *
 * @returns {car} Random car with entrance, color, registrationNumber
 */
export const generateCar = () => {
	let availableEntrances = Object.keys(ENTRANCES);
	let availableColors = Object.keys(COLORS);

	const entrance = getEntrance(availableEntrances);
	const color = getColor(availableColors);
	const registrationNumber = getRegistrationNumber();

	return {
		entrance,
		color,
		registrationNumber,
	};
};
