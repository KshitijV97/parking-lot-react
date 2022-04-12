import { debounce } from '../../helpers/debounce';

// Component to take size of parking lot from user
const ParkingLotSize = ({ setParkingLotSize }) => {
	const changeParkingSize = (event) => {
		setParkingLotSize(event.target.value);
	};
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				padding: '1em',
			}}
		>
			<label>
				Enter size of parking lot
				<input
					style={{
						padding: '12px 20px',
						margin: ' 8px 8px',
						boxSizing: 'borderBox',
					}}
					type='text'
					onChange={debounce(changeParkingSize, 500)}
				/>
			</label>
		</div>
	);
};

export default ParkingLotSize;
