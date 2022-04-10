import React, { useMemo } from 'react';

const ParkingSlot = ({ ticketNumber, registrationNumber, color }) => {
	let occupancyStatus = useMemo(
		() => (registrationNumber ? 'Occupied' : 'Empty'),
		[registrationNumber]
	);
	return (
		<div
			style={{
				margin: '1em',
				padding: '1em',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				maxWidth: '80vw',
				backgroundColor: 'white',
				border: 'black 1px solid',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					minWidth: '50%',
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
					minWidth: '50%',
				}}
			>
				<div style={{ padding: '0.5em' }}>
					<span>Registration number : </span>
					<span>{registrationNumber}</span>
				</div>
				<div style={{ padding: '0.5em' }}>
					<span>Color : </span>
					<span>{color}</span>
				</div>
			</div>
		</div>
	);
};

export default ParkingSlot;
