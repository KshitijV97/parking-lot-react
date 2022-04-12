export const getTicketsByColor = (parkingLot, color) => {
	let ticketNumbers = parkingLot
		.filter((slot) => {
			return slot.color === color;
		})
		.map((slot) => slot.ticketNumber);
	if (ticketNumbers.length === 0) alert(`No cars of color ${color} found`);
	return ticketNumbers;
};
