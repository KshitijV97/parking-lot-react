import { addCar } from '../../functions/addCar';
import { ENTRANCES } from '../../constants/entrances';
import { COLORS } from '../../constants/colors';

import { DisplayRegistrationNumbersByColor } from './DisplayRegistrationNumbersByColor';
import { DisplayTicketNumbersByColor } from './DisplayTicketNumbersByColor';
import { DisplayTicketsByRegistration } from './DisplayTicketsByRegistration';
import { AddCars } from './AddCars';

const Queries = ({ parkingLot, setParkingLot }) => {
	let availableColors = Object.keys(COLORS).map((color) => {
		return {
			label: color,
			value: COLORS[color],
		};
	});

	return (
		<div>
			<AddCars parkingLot={parkingLot} setParkingLot={setParkingLot} />
			<DisplayRegistrationNumbersByColor
				parkingLot={parkingLot}
				availableColors={availableColors}
			/>
			<DisplayTicketNumbersByColor
				parkingLot={parkingLot}
				availableColors={availableColors}
			/>
			<DisplayTicketsByRegistration parkingLot={parkingLot} />
		</div>
	);
};

export default Queries;
