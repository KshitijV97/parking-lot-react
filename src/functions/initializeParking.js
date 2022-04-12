import { getRandomElement } from '../helpers/getRandomElement';
import { generateCar } from './generateCar';

/**
 *
 * @param {number} size Size of parking lot taken from user
 * @returns {Array} Returns a Parking lot randomly populated with cars
 */
export const initializeParking = (size) => {
	let parkingLot = [];

	for (let i = 0; i < size; i++) {
		let slot = {
			ticketNumber: i,
			color: '',
			registrationNumber: '',
			entrance: '',
		};
		if (addCarOrNot()) {
			let generatedCar = generateCar();
			slot = {
				...slot,
				...generatedCar,
			};
		}
		parkingLot.push(slot);
	}
	return parkingLot;
};

/**
 *
 * @returns {Boolean} Randomly returns true or false
 */
const addCarOrNot = () => {
	return getRandomElement([true, false]);
};
