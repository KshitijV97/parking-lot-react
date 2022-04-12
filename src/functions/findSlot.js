import { ENTRANCES } from '../constants/entrances';

/**
 *
 * @param {Array} parkingLot - State variable which stores the Parking lot
 * @param {ENTRANCES} entrance - Entrance from which the vehicle came inside
 * @returns {number} Returns ticket number of slot where car is parked
 */
export const findSlot = (parkingLot, entrance) => {
	if (entrance === ENTRANCES.FRONT) {
		let emptySlotFound = false;
		for (let i = 0; i < parkingLot.length; i++) {
			if (parkingLot[i].registrationNumber === '') {
				emptySlotFound = true;
				return i;
			}
		}
		if (!emptySlotFound) return -1;
	} else {
		let emptySlotFound = false;
		for (let i = parkingLot.length - 1; i > -1; i--) {
			if (parkingLot[i].registrationNumber === '') {
				emptySlotFound = true;
				return i;
			}
		}
		if (!emptySlotFound) return -1;
	}
};
