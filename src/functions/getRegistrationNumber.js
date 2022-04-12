import { getRandomElement } from '../helpers/getRandomElement';

import { STATES } from '../constants/states';
import { DISTRICTS } from '../constants/district-codes';
import { ENGLISH_LETTERS } from '../constants/english-letters';
import { DIGITS } from '../constants/digits';

/**
 *
 * @returns {String} A random registration number for car
 */
export const getRegistrationNumber = () => {
	const stateCode = getRandomElement(STATES);
	const districtCode = getRandomElement(DISTRICTS);
	const series = getOngoingSeries(ENGLISH_LETTERS);
	const serialNumber = getSerialNumber();
	return `${stateCode}${districtCode}${series}${serialNumber}`;
};

/**
 *
 * @param {Array} LETTERS Array of letters of english alphabet
 * @returns {String} Two letter series for Registration number
 */
const getOngoingSeries = (LETTERS) => {
	let series = getRandomElement(LETTERS) + getRandomElement(ENGLISH_LETTERS);
	return series;
};

/**
 *
 * @returns {String} Random four digit serial number for Registration number of car
 */
const getSerialNumber = () => {
	let serialNumber =
		getRandomElement(DIGITS).toString() +
		getRandomElement(DIGITS).toString() +
		getRandomElement(DIGITS).toString() +
		getRandomElement(DIGITS).toString();
	return serialNumber;
};
