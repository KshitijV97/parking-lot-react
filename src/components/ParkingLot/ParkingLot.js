import ParkingSlot from '../ParkingSlot/ParkingSlot';
import { removeCar } from '../../functions/removeCar';

// Parking lot component which shows which car is parked in which slot
const ParkingLot = ({ parkingLot, setParkingLot }) => {
	return (
		<div>
			{parkingLot.map((slot, index) => {
				console.log('Logging slot', slot);
				return (
					<ParkingSlot
						ticketNumber={slot.ticketNumber}
						registrationNumber={slot.registrationNumber}
						color={slot.color}
						key={index}
						parkingLot={parkingLot}
						setParkingLot={setParkingLot}
						removeCar={removeCar}
						entrance={slot.entrance}
					/>
				);
			})}
		</div>
	);
};

export default ParkingLot;
