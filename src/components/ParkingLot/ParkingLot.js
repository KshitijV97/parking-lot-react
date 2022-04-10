import ParkingSlot from '../ParkingSlot/ParkingSlot';

const ParkingLot = ({ parkingLot }) => {
	return (
		<div>
			{parkingLot.map((slot, index) => (
				<ParkingSlot
					ticketNumber={slot.ticketNumber}
					registrationNumber={slot.registrationNumber}
					color={slot.color}
					key={index}
				/>
			))}
		</div>
	);
};

export default ParkingLot;
