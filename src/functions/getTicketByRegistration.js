export const getTicketByRegistration = (parkingLot, registrationNumber) => {
	let cars = parkingLot.filter((car) => {
		return car.registrationNumber === registrationNumber;
	});
	if (cars.length === 1) return cars[0].ticketNumber.toString();
	alert(`Vehicle with Registration number ${registrationNumber} not found`);
	return null;
};
