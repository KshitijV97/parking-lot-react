import { debounce } from '../../helpers/debounce';

const ParkingLotSize = ({ setParkingLotSize }) => {
	const changeParkingSize = (event) => {
		setParkingLotSize(event.target.value);
	};
	return (
		<div>
			<label>
				Enter size of parking lot
				<input
					type='text'
					onChange={debounce(changeParkingSize, 500)}
				/>
			</label>
		</div>
	);
};

export default ParkingLotSize;
