import { addCar } from '../../functions/addCar';
import { ENTRANCES } from '../../constants/entrances';

const Queries = ({ parkingLot, setParkingLot }) => {
	return (
		<div>
			<button
				onClick={() => {
					addCar(parkingLot, setParkingLot, ENTRANCES.FRONT);
				}}
			>
				Add new car from front
			</button>
			<button
				onClick={() => {
					addCar(parkingLot, setParkingLot, ENTRANCES.REAR);
				}}
			>
				Add new car from rear
			</button>
		</div>
	);
};

export default Queries;
