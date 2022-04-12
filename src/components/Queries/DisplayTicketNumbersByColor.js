import React, { useState, useEffect } from 'react';
import { getTicketsByColor } from '../../functions/getTicketsByColor';
import { FilteredResult } from '../FilteredResult/FilteredResult';
import { Dropdown } from '../Dropdown/Dropdown';

// Component which displays ticket numbers by Color of car 
export const DisplayTicketNumbersByColor = ({
	parkingLot,
	availableColors,
}) => {
	useEffect(() => {
		setColorFilterTicket({
			label: '',
			value: '',
		});
		setColorFilteredTicketNumbers([]);
	}, [parkingLot]);

	const [colorFilterTicket, setColorFilterTicket] = useState({
		label: '',
		value: '',
	});

	const [colorFilteredTicketNumbers, setColorFilteredTicketNumbers] =
		useState([]);

	useEffect(() => {
		if (colorFilterTicket?.value) {
			setColorFilteredTicketNumbers(
				getTicketsByColor(parkingLot, colorFilterTicket.label)
			);
		}
	}, [colorFilterTicket]);

	/**
	 * Logging for Debugging
	 */
	useEffect(() => {
		console.log(
			`LOGS | Ticket numbers of color ${colorFilterTicket.label} are `,
			colorFilteredTicketNumbers
		);
	}, [colorFilteredTicketNumbers]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '1em',
				}}
			>
				<Dropdown
					label='Get ticket number of cars of a particular color'
					placeholder='COLOR'
					options={availableColors}
					onChange={(event) => {
						let selectedColor = availableColors.filter(
							(color) => color.value === event.target.value
						)[0];
						setColorFilterTicket(selectedColor);
					}}
				/>
				<button
					style={{
						backgroundColor: 'white',
						border: 'none',
						textAlign: 'center',
						textDecoration: 'none',
						display: 'inline-block',
						marginLeft: '1em',
						cursor: 'pointer',
					}}
					onClick={() => {
						setColorFilterTicket({
							label: '',
							value: '',
						});
						setColorFilteredTicketNumbers([]);
					}}
				>
					Clear results
				</button>
			</div>
			{colorFilteredTicketNumbers.length > 0 ? (
				<div>
					<FilteredResult values={colorFilteredTicketNumbers} />
				</div>
			) : null}
		</div>
	);
};
