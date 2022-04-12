import React, { useEffect, useState } from 'react';
import { debounce } from '../../helpers/debounce';
import { getTicketByRegistration } from '../../functions/getTicketByRegistration';

// Component that displays ticket number of car with given registration number
export const DisplayTicketsByRegistration = ({ parkingLot }) => {
	const [registrationNumber, setRegistrationNumber] = useState('');
	const [ticket, setTicket] = useState('');

	useEffect(() => {
		setRegistrationNumber('');
		setTicket('');
	}, [parkingLot]);

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '1em',
				}}
			>
				<label>
					<span style={{ marginRight: '1em' }}>
						Enter registration number of parked car to get Ticket
						number
					</span>
					<input
						type='text'
						value={registrationNumber}
						onChange={(event) => {
							debounce(
								setRegistrationNumber(event.target.value),
								400
							);
						}}
					/>
				</label>

				<button
					style={{ marginLeft: '1em' }}
					onClick={() => {
						setTicket(
							getTicketByRegistration(
								parkingLot,
								registrationNumber
							)
						);
					}}
				>
					Search
				</button>
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
						setRegistrationNumber('');
						setTicket('');
					}}
				>
					Clear results
				</button>
			</div>
			{ticket ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1em',
					}}
				>
					<div
						style={{
							textAlign: 'center',
							width: '15vw',
							backgroundColor: 'white',
							padding: '0.3em',
						}}
					>
						{ticket}
					</div>
				</div>
			) : null}
		</div>
	);
};
