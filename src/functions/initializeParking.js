import { getRandomElement } from '../helpers/getRandomElement';
import { generateCar } from './generateCar';

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

const addCarOrNot = () => {
	return getRandomElement([true, false]);
};
