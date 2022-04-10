import { getRandomElement } from '../helpers/getRandomElement';

import { STATES } from '../constants/states';
import { DISTRICTS } from '../constants/district-codes';
import { ENGLISH_LETTERS } from '../constants/english-letters';
import { DIGITS } from '../constants/digits';

export const getRegistrationNumber = () => {
	const stateCode = getRandomElement(STATES);
	const districtCode = getRandomElement(DISTRICTS);
	const series = getOngoingSeries(ENGLISH_LETTERS);
	const serialNumber = getSerialNumber();
	return `${stateCode}${districtCode}${series}${serialNumber}`;
};

const getOngoingSeries = (LETTERS) => {
	let series = getRandomElement(LETTERS) + getRandomElement(ENGLISH_LETTERS);
	return series;
};

const getSerialNumber = () => {
	let serialNumber =
		getRandomElement(DIGITS).toString() +
		getRandomElement(DIGITS).toString() +
		getRandomElement(DIGITS).toString() +
		getRandomElement(DIGITS).toString();
	return serialNumber;
};
