import { compareJsonObjects } from '../helpers/compareJsonObjects';

export const removeCar = (parkingLot, setParkingLot, car) => {
	let carFound = false;
	console.log('Given car is', car);
	for (let currentCar of parkingLot) {
		if (compareJsonObjects(currentCar, car)) {
			carFound = true;
		}
	}
	if (carFound) {
		setParkingLot([
			...parkingLot.slice(0, car.ticketNumber),
			{
				ticketNumber: car.ticketNumber,
				registrationNumber: '',
				color: '',
				entrance: '',
			},
			...parkingLot.slice(car.ticketNumber + 1, parkingLot.length),
		]);
		alert(
			`Car with Registration number ${car.registrationNumber} removed from Parking Lot`
		);
	} else {
		alert(`Cannot find car in parking lot`);
	}
};
