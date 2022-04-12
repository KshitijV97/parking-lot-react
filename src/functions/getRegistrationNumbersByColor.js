/**
 *
 * @param {Array} parkingLot State variable which stores the Parking lot
 * @param {String} color Color of car
 * @returns {Array} Array of registration numbers of cars of a particular color
 */
export const getRegistrationNumbersByColor = (parkingLot, color) => {
	let registrationNumbers = parkingLot
		.filter((slot) => {
			return slot.color === color;
		})
		.map((slot) => slot.registrationNumber);
	if (registrationNumbers.length === 0)
		alert(`No cars of color ${color} found`);
	return registrationNumbers;
};
