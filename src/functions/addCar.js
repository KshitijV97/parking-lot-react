import { findSlot } from './findSlot';
import { generateCar } from './generateCar';

export const addCar = (parkingLot, setParkingLot, entrance) => {
	let emptySlot = findSlot(parkingLot, entrance);
	console.log('LOGS | Empty slot is ', emptySlot);
	if (emptySlot !== -1) {
		let car = generateCar();
		car.ticketNumber = emptySlot;
		console.log('Trying to add this car', car);
		setParkingLot([
			...parkingLot.slice(0, emptySlot),
			car,
			...parkingLot.slice(emptySlot + 1, parkingLot.length),
		]);
		alert(`New car added successfully at ${car.ticketNumber} slot`);
	} else {
		alert('Cannot add more cars as the Parking lot is full');
		return false;
	}
};
