import { findSlot } from './findSlot';
import { generateCar } from './generateCar';


/**
 * 
 * @param {Array of slots} parkingLot - State variable which stores the Parking lot
 * @param {Function} setParkingLot - Function which updates the state variable parkingLot
 * @param {ENTRANCE} entrance - Entrance by which the car came inside parking lot
 * @returns {Boolean} false if unable to add car
 */
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
		return true;
	} else {
		alert('Cannot add more cars as the Parking lot is full');
		return false;
	}
};
