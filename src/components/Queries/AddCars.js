import React from 'react';
import { ENTRANCES } from '../../constants/entrances';
import { addCar } from '../../functions/addCar';

export const AddCars = ({ parkingLot, setParkingLot }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				padding: '0.5em',
				margin: '0.5em',
			}}
		>
			<button
				style={{
					border: 'none',
					textAlign: 'center',
					textDecoration: 'none',
					display: 'inline-block',
					backgroundColor: '#D6CDEA',
					padding: '15px 32px',
					cursor: 'pointer',
				}}
				onClick={() => {
					addCar(parkingLot, setParkingLot, ENTRANCES.FRONT);
				}}
			>
				Add new car from front
			</button>
			<button
				style={{
					border: 'none',
					textAlign: 'center',
					textDecoration: 'none',
					display: 'inline-block',
					backgroundColor: '#D6CDEA',
					padding: '15px 32px',
					marginLeft: '1em',
					cursor: 'pointer',
				}}
				onClick={() => {
					addCar(parkingLot, setParkingLot, ENTRANCES.REAR);
				}}
			>
				Add new car from rear
			</button>
		</div>
	);
};
