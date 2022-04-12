import React, { useMemo } from 'react';
import { COLORS } from '../../constants/colors';

// Component to show a single parking slot, Shows all details and allows to remove car
const ParkingSlot = ({
	ticketNumber,
	registrationNumber,
	color,
	parkingLot,
	setParkingLot,
	removeCar,
	entrance,
}) => {
	let occupancyStatus = useMemo(
		() => (registrationNumber ? 'Occupied' : 'Empty'),
		[registrationNumber]
	);
	return (
		<div>
			<div
				style={{
					margin: '1em',
					padding: '1em',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					maxWidth: '80vw',
					backgroundColor: 'white',
					border: 'black 1px solid',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							minWidth: '40%',
						}}
					>
						<div style={{ padding: '0.5em' }}>
							<span>Ticket number : </span>
							<span>{ticketNumber}</span>
						</div>
						<div style={{ padding: '0.5em' }}>
							<span>Occupancy status : </span>
							<span>{occupancyStatus}</span>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							minWidth: '40%',
						}}
					>
						<div style={{ padding: '0.5em' }}>
							<span>Registration number : </span>
							<span>{registrationNumber}</span>
						</div>
						<div style={{ padding: '0.5em' }}>
							<span>Color : </span>
							<span
								style={{
									marginRight: '1em',
									color: 'white',
									backgroundColor: COLORS[color],
									width: '1em',
									height: '1em',
								}}
							>
								_____
							</span>
							<span>{color}</span>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row-reverse',
							width: '100%',
							marginRight: '-1em',
						}}
					>
						<button
							disabled={!registrationNumber}
							style={{
								marginRight: '1em',
								height: '2em',
								backgroundColor: 'white',
							}}
							onClick={() => {
								removeCar(parkingLot, setParkingLot, {
									ticketNumber: ticketNumber,
									registrationNumber: registrationNumber,
									color: color,
									entrance: entrance,
								});
							}}
						>
							Remove car
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParkingSlot;
